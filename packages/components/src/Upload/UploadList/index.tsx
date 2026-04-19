// packages/components/src/Upload/UploadList/index.tsx
import React from 'react';
import { type UploadFile, type UploadListType } from '../interface';
import { ListItem } from './ListItem';

export interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (file: UploadFile) => void;
  onPreview?: (file: UploadFile) => void;
  listType?: UploadListType;
  itemRender?: (
    originNode: React.ReactElement,
    file: UploadFile,
  ) => React.ReactNode;
}

export const UploadList: React.FC<UploadListProps> = (props) => {
  const { fileList, listType = 'text' } = props;

  // 根据不同的 listType 决定外层 <ul> 的样式（比如 picture-card 需要 flex 换行）
  const listContainerStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    marginTop: 10,
    ...(listType === 'picture-card'
      ? { display: 'flex', flexWrap: 'wrap', gap: 8 }
      : {}),
  };

  return (
    <ul
      className={`cheese-upload-list cheese-upload-list-${listType}`}
      style={listContainerStyle}
    >
      {fileList.map((file) => (
        <ListItem
          key={file.uid}
          file={file}
          {...props} // 将 onRemove, onPreview, listType 一次性透传下去
        />
      ))}
    </ul>
  );
};
