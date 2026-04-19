// 定义请求入参的严谨接口
export interface UploadRequestOption {
  action: string;
  name: string;
  file: File;
  headers?: Record<string, string>;
  onProgress: (percent: number, file: File) => void;
  onSuccess: (data: unknown, file: File) => void;
  onError: (err: unknown, file: File) => void;
}

/**
 * 核心网络请求引擎：基于原生 XHR 封装
 */
export const post = (option: UploadRequestOption) => {
  const { action, name, file, headers, onProgress, onSuccess, onError } =
    option;

  // 1. 实例化核心对象
  const xhr = new XMLHttpRequest();

  // 2. 极其关键的进度拦截机制
  if (xhr.upload) {
    xhr.upload.onprogress = (e: ProgressEvent) => {
      let percent = 0;
      // 确保总大小不为 0，防止除以 0 导致 Infinity (NaN)
      if (e.total > 0) {
        percent = Math.round((e.loaded / e.total) * 100);
      }
      // 将计算好的百分比抛给外层 React 组件
      onProgress(percent, file);
    };
  }

  // 3. 构造原生二进制表单数据
  const formData = new FormData();
  formData.append(name, file);

  // 4. 网络异常与超时拦截
  xhr.onerror = () => {
    onError(new Error(`[Upload 失败] 接口 ${action} 请求异常`), file);
  };

  // 5. 状态码成功拦截
  xhr.onload = () => {
    // 只有 2xx 的状态码才算真正成功
    if (xhr.status < 200 || xhr.status >= 300) {
      return onError(
        new Error(`[Upload 失败] 接口返回状态码: ${xhr.status}`),
        file,
      );
    }

    // 尝试解析后端返回的内容
    let responseData: unknown = xhr.responseText;
    try {
      responseData = JSON.parse(xhr.responseText);
    } catch {
      // 如果后端没返回标准的 JSON，就保持原样的纯文本
    }

    onSuccess(responseData, file);
  };

  // 6. 建立连接 (true 表示异步请求)
  xhr.open('POST', action, true);

  // 7. 注入自定义请求头
  if (headers) {
    Object.keys(headers).forEach((key) => {
      const value = headers[key];
      // ⚠️ 极其核心的面试陷阱回避：绝对不要在这里手动设置 Content-Type: multipart/form-data！
      // 浏览器在识别到 body 是 FormData 时，会自动为你设置正确的带 boundary（边界字符串）的 Content-Type
      if (value !== undefined && value !== null) {
        xhr.setRequestHeader(key, value);
      }
    });
  }

  // 8. 发射！
  xhr.send(formData);

  // 返回 xhr 实例，方便未来做“取消上传”的功能拓展
  return xhr;
};
