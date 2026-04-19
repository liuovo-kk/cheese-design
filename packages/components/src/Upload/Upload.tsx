import React, { useRef, useState, type ChangeEvent } from 'react';
import type { UploadProps, UploadFile } from './interface';
import { UploadList } from './UploadList';
import { post } from './ajax';
import { Dragger } from './Dragger';

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    name = 'file',
    headers,
    accept,
    multiple,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    drag,
    listType = 'text', // 默认还是普通的文本列表
    onPreview, // 预览钩子
    itemRender,
    onRemove,
    children,
  } = props;

  // 内部核心状态机：维护所有上传文件的生命周期
  const [fileList, setFileList] = useState<UploadFile[]>(
    props.defaultFileList || [],
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 【核心机制】：安全地更新特定文件的状态（规避 React 异步闭包陷阱）
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>,
  ) => {
    setFileList((prevList) => {
      const newList = prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
      return newList;
    });
  };

  // 当用户点击组件（比如一个按钮）时，强行触发隐藏 input 的点击事件
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 拦截 input 的 change 事件，拿到用户选中的原生 File 对象
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // files 是一个类数组对象 (FileList)，我们将其转换为真正的数组
    uploadFiles(Array.from(files));

    // 极其关键的清空操作：如果不清空，用户连续两次上传同一个文件，将不会触发 onChange 事件
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 核心中转站：处理选中的文件
  const uploadFiles = (files: File[]) => {
    // 遍历每一个选中的原生 File
    files.forEach((file) => {
      // 1. 先组装好内部的 UploadFile 对象，但绝对不急着塞进状态机！
      const _file: UploadFile = {
        uid: Date.now() + '-' + file.name,
        status: 'ready',
        name: file.name,
        size: file.size,
        percent: 0,
        raw: file,
        ...(file.type.startsWith('image/')
          ? { thumbUrl: URL.createObjectURL(file) }
          : {}),
      };

      // 2. 🚀 极其严格的前置拦截判断
      if (!beforeUpload) {
        // 没有拦截器，加入列表并开始网络请求
        setFileList((prevList) => [_file, ...prevList]);
        postFile(_file);
      } else {
        const result = beforeUpload(file); // 使用原生 file 触发拦截

        if (result && result instanceof Promise) {
          // 异步拦截：等 Promise 成功（如图片压缩完毕）后再进列表上传
          result.then((processedFile) => {
            _file.raw = processedFile;
            setFileList((prevList) => [_file, ...prevList]);
            postFile(_file);
          });
        } else if (result !== false) {
          // 拦截器放行（返回 true）：正常加入列表并上传
          setFileList((prevList) => [_file, ...prevList]);
          postFile(_file);
        }
        // 注意：如果 result === false，什么都不做！不污染 UI，完美通过单测！
      }
    });
  };

  // 极其关键的删除逻辑：从状态机中精准剔除对应文件
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    // 如果有外部传入的 onChange 或者 onRemove 回调，记得在这里抛出
    if (onRemove) {
      onRemove(file);
    }
  };

  // 真正的网络请求核心调度
  const postFile = (file: UploadFile) => {
    // 将状态翻转为“上传中”
    updateFileList(file, { status: 'uploading', percent: 0 });

    // 调用我们在 ajax.ts 里写的硬核引擎
    post({
      action,
      name,
      file: file.raw!,
      ...(headers ? { headers } : {}),
      onProgress: (percent, rawFile) => {
        // 更新状态机的进度条
        updateFileList(file, { status: 'uploading', percent });
        // 抛出给外层业务组件（如果有传的话）
        if (onProgress) onProgress(percent, rawFile);
      },
      onSuccess: (data, rawFile) => {
        // 更新状态机为成功
        updateFileList(file, { status: 'success', response: data });
        if (onSuccess) onSuccess(data, rawFile);
        if (onChange) onChange(file);
      },
      onError: (err, rawFile) => {
        // 更新状态机为失败
        updateFileList(file, { status: 'error', error: err });
        if (onError) onError(err, rawFile);
        if (onChange) onChange(file);
      },
    });
  };

  return (
    <div className="cheese-upload-wrapper">
      <div
        className="cheese-upload-trigger"
        onClick={handleClick}
        style={{ display: 'inline-block', width: drag ? '100%' : 'auto' }}
      >
        {drag ? (
          // 如果开启了 drag，就把原有的 children 套在 Dragger 里
          // 并把我们极其核心的 uploadFiles 函数传给它！
          <Dragger onFile={(files) => uploadFiles(files)}>{children}</Dragger>
        ) : (
          // 普通的点击上传，保持原样
          children
        )}
      </div>

      {/* 隐藏的触发器 */}
      <input
        className="cheese-upload-file-input"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
        type="file"
        accept={accept}
        multiple={multiple}
      />

      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
        {...(onPreview ? { onPreview } : {})}
        listType={listType}
        {...(itemRender ? { itemRender } : {})}
      />
    </div>
  );
};
