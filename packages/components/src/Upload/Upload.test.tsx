// packages/components/src/Upload/Upload.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Upload } from './Upload';
import type { UploadFile } from './interface';

// 🚀 极其关键：欺骗 Jest，给 JSDOM 伪造一个 URL.createObjectURL 方法
beforeAll(() => {
  window.URL.createObjectURL = jest.fn(() => 'mock-url');
});

const testFile = new File(['hello'], 'test.png', { type: 'image/png' });

const defaultFileList: UploadFile[] = [
  { uid: '1', size: 1024, name: 'file1.txt', status: 'success', percent: 100 },
  { uid: '2', size: 2048, name: 'file2.png', status: 'uploading', percent: 50 },
  { uid: '3', size: 3072, name: 'file3.doc', status: 'error', percent: 0 },
];

describe('Upload 组件企业级测试', () => {
  // 1. 快照测试
  test('Upload component should match snapshot (text 模式)', () => {
    const { asFragment } = render(
      <Upload action="/test" defaultFileList={defaultFileList}>
        <button>上传</button>
      </Upload>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // 2. 基础逻辑测试 (修复了断言)
  test('应该根据 status 正确渲染极其丰富的 UI 状态', () => {
    render(
      <Upload action="/test" defaultFileList={defaultFileList}>
        <button>上传</button>
      </Upload>,
    );

    // 验证文件名是否都正确渲染
    expect(screen.getByText('file1.txt')).toBeInTheDocument();
    expect(screen.getByText('file2.png')).toBeInTheDocument();
    expect(screen.getByText('file3.doc')).toBeInTheDocument();

    // 验证 uploading 状态的进度条文本
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  // 3. UI 交互测试
  test('点击删除按钮时，应该极其精准地触发 onRemove', () => {
    const handleRemove = jest.fn();
    render(
      <Upload
        action="/test"
        defaultFileList={defaultFileList}
        onRemove={handleRemove}
      >
        <button>上传</button>
      </Upload>,
    );

    const removeButtons = screen.getAllByText('🗑️');
    fireEvent.click(removeButtons[0]!);

    expect(handleRemove).toHaveBeenCalledTimes(1);
    expect(handleRemove).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'file1.txt' }),
    );
  });

  // 4. 边界情况测试
  test('当 beforeUpload 返回 false 时，不应该将文件加入列表并上传', async () => {
    const { container } = render(
      <Upload action="/test" beforeUpload={() => false}>
        <button>上传</button>
      </Upload>,
    );

    const fileInput = container.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    fireEvent.change(fileInput, { target: { files: [testFile] } });

    // 因为被 beforeUpload 拦截，文件根本不会进列表，页面上也不会出现文件名
    await waitFor(() => {
      expect(screen.queryByText('test.png')).not.toBeInTheDocument();
    });
  });
});
