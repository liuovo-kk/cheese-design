// 定义文件在上传生命周期中的四种核心状态
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

//支持的列表渲染模式
export type UploadListType = 'text' | 'picture' | 'picture-card';

// 经过组件包装后的内部文件对象
export interface UploadFile {
  uid: string; // 唯一标识
  size: number; // 文件大小
  name: string; // 文件名
  status?: UploadFileStatus; // 当前状态
  percent?: number; // 上传进度百分比
  raw?: File; // 浏览器原生的 File 对象，包含真实的二进制数据
  response?: unknown; // 上传成功后后端的返回值
  error?: unknown; // 上传失败后的错误信息
  thumbUrl?: string; // 图片的本地预览地址或服务器地址
}

// Upload 组件的外部 Props
export interface UploadProps {
  action: string; // 必填：后端上传接口地址
  headers?: Record<string, string>; // 自定义请求头
  name?: string; // 发到后台的文件参数名，默认 'file'
  accept?: string; // 允许上传的文件类型
  multiple?: boolean; // 是否支持多选
  drag?: boolean; //是否拖拽上传
  beforeUpload?: (file: File) => boolean | Promise<File>; // 上传前的钩子（极其重要的卡口）
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: unknown, file: File) => void;
  onError?: (err: unknown, file: File) => void;
  onChange?: (file: UploadFile) => void;
  children?: React.ReactNode;
  listType?: UploadListType; // 列表样式
  onPreview?: (file: UploadFile) => void; // 点击图片预览的钩子
  /**
   * 极其强大的逃生舱：自定义渲染列表项
   * @param originNode 组件底层默认渲染出来的 DOM 节点
   * @param file 当前的文件数据对象
   */
  itemRender?: (
    originNode: React.ReactElement,
    file: UploadFile,
  ) => React.ReactNode;
  defaultFileList?: UploadFile[]; //默认已经上传的文件列表（用于测试或初始化数据）
  onRemove?: (file: UploadFile) => void; // 删除文件的回调
}
