import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Upload, Button } from '@cheese-design/components';
import type { UploadFile } from '@cheese-design/components';

const meta: Meta<typeof Upload> = {
  title: '数据录入组件/Upload 上传',
  component: Upload,
  // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Upload>;

// 🚀 写一个包装组件，用来模拟真实的业务场景（包含状态管理和弹窗）
const PictureCardDemo = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  // 接住 Upload 抛出的 onPreview 事件
  const handlePreview = (file: UploadFile) => {
    // 设置要预览的图片 URL 和标题
    setPreviewImage(file.thumbUrl || '');
    setPreviewTitle(file.name || '');
    // 打开弹窗
    setPreviewOpen(true);
  };

  return (
    <>
      <Upload
        action="https://jsonplaceholder.typicode.com/posts/"
        listType="picture-card"
        multiple={true}
        accept="image/*"
        onPreview={handlePreview} // 👈 极其核心的事件绑定
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#999',
          }}
        >
          <span style={{ fontSize: 24, marginBottom: 8 }}>+</span>
          <span>上传照片</span>
        </div>
      </Upload>

      {/* 极其极客的极简全屏预览弹窗 */}
      {previewOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setPreviewOpen(false)} // 点击背景关闭
        >
          {/* 右上角关闭按钮 */}
          <span
            style={{
              position: 'absolute',
              top: 20,
              right: 30,
              color: '#fff',
              fontSize: 32,
              cursor: 'pointer',
            }}
          >
            ×
          </span>

          {/* 大图展示 */}
          <img
            src={previewImage}
            alt="预览"
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            onClick={(e) => e.stopPropagation()} // 阻止冒泡，防止点击图片本身关闭弹窗
          />

          {/* 图片标题 */}
          <span style={{ color: '#fff', marginTop: 16, fontSize: 16 }}>
            {previewTitle}
          </span>
        </div>
      )}
    </>
  );
};

// 导出照片墙故事
export const PictureCard: Story = {
  render: () => <PictureCardDemo />,
};

export const Basic: Story = {
  args: {
    // 使用一个免费的公共 JSONPlaceholder API 来模拟 POST 请求
    // 注意：这个接口响应极快，如果是小文件，进度条可能会瞬间 100%
    action: 'https://jsonplaceholder.typicode.com/posts/',
    name: 'fileName',
    multiple: true, // 开启多选测试
    beforeUpload: (file: File) => {
      // 【拦截器测试】：只允许上传小于 500KB 的文件
      const isLt500K = file.size / 1024 < 500;
      if (!isLt500K) {
        alert(`文件 ${file.name} 太大了！为了测试，请上传 500KB 以下的文件。`);
      }
      return isLt500K;
    },
    children: (
      <Button type="primary" size="large">
        点击上传文件
      </Button>
    ),
  },
};

export const DragSimulation: Story = {
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    drag: true,
    listType: 'picture-card',
    children: (
      <div
        style={{
          padding: '40px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ fontSize: 32, marginBottom: 8 }}>📁</span>
        <span style={{ color: '#333', fontWeight: 'bold' }}>
          点击或将文件拖拽到这里上传
        </span>
        <span style={{ color: '#999', fontSize: 12, marginTop: 4 }}>
          支持单次或批量拖拽上传
        </span>
      </div>
    ),
  },
};

export const CustomItemRender: Story = {
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    multiple: true,
    itemRender: (originNode, file) => {
      // 极其自由！我们可以完全抛弃 originNode，自己画一个新的
      return (
        <div
          style={{
            border: '1px solid #1677ff',
            borderRadius: 8,
            padding: 12,
            marginTop: 10,
            background: 'linear-gradient(90deg, #e6f4ff 0%, #ffffff 100%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <span style={{ fontSize: 20, marginRight: 8 }}>🤖</span>
            <span style={{ fontWeight: 'bold', color: '#1677ff' }}>
              解析文档：{file.name}
            </span>
          </div>
          <div>
            {file.status === 'uploading' ? (
              <span style={{ color: '#faad14' }}>
                模型读取中 ({file.percent}%) ...
              </span>
            ) : (
              <button
                style={{
                  background: '#1677ff',
                  color: '#fff',
                  border: 'none',
                  padding: '4px 12px',
                  borderRadius: 4,
                  cursor: 'pointer',
                }}
              >
                提取上下文
              </button>
            )}
          </div>
        </div>
      );
    },
    children: <Button type="primary">上传知识库文档</Button>,
  },
};
