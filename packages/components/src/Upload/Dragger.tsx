// packages/components/src/Upload/Dragger.tsx
import React, { useState, type DragEvent } from 'react';

interface DraggerProps {
  onFile: (files: File[]) => void; // 极其关键的桥梁：将拿到的文件扔给主组件
  children: React.ReactNode;
}

export const Dragger: React.FC<DraggerProps> = ({ onFile, children }) => {
  // 状态机：记录当前是否有文件悬停在上方
  const [dragOver, setDragOver] = useState(false);

  // 文件被拖拽着进入感应区
  const handleDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault(); // 极其重要：必须阻止浏览器默认行为，否则松手时浏览器会直接打开这个文件！
    setDragOver(true);
  };

  // 文件离开了感应区
  const handleDragLeave = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  // 终极时刻：用户松手，文件落下
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);

    // 从 HTML5 原生的 dataTransfer 对象中榨取真实的 File 对象！
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      // 把它转换成真正的数组，并通过回调扔给 Upload 组件
      onFile(Array.from(files));
    }
  };

  return (
    <div
      className={`cheese-upload-dragger ${dragOver ? 'is-dragover' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: dragOver ? '2px dashed #1890ff' : '2px dashed #d9d9d9',
        backgroundColor: dragOver ? '#e6f7ff' : '#fafafa',
        transition: 'all 0.3s',
        cursor: 'pointer',
        borderRadius: 8,
        display: 'inline-block',
        width: '50%',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};
