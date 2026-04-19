import React from 'react';
import { type UploadFile, type UploadListType } from '../interface';
import styles from '../index.module.scss';

export interface ListItemProps {
  file: UploadFile;
  listType?: UploadListType;
  onRemove: (file: UploadFile) => void;
  onPreview?: (file: UploadFile) => void;
  itemRender?: (
    originNode: React.ReactElement,
    file: UploadFile,
  ) => React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  file,
  listType,
  onRemove,
  onPreview,
  itemRender,
}) => {
  // 准备一个变量，用来装载我们写的默认 UI
  let originNode: React.ReactElement;
  // 1. 文本模式 (text)
  if (listType === 'text') {
    originNode = (
      <li
        className={`${styles.textItem} ${file.status === 'error' ? styles.error : ''}`}
      >
        <div className={styles.info}>
          <span className={styles.name}>
            <span className={styles.icon}>📄</span>
            {file.name}
          </span>
          <div className={styles.actions}>
            {file.status === 'uploading' && (
              <span className={styles.percent}>{file.percent}%</span>
            )}
            <span className={styles.removeBtn} onClick={() => onRemove(file)}>
              🗑️
            </span>
          </div>
        </div>
        {file.status === 'uploading' && (
          <div className={styles.progressWrapper}>
            {/* 唯一合法的内联样式：动态宽度 */}
            <div
              className={styles.progressBar}
              style={{ width: `${file.percent || 0}%` }}
            />
          </div>
        )}
      </li>
    );
  }

  // 2. 图文模式 (picture)
  else if (listType === 'picture') {
    originNode = (
      <li
        className={`${styles.pictureItem} ${file.status === 'error' ? styles.error : ''}`}
      >
        <div className={styles.info}>
          <div className={styles.thumbnailWrapper}>
            {file.thumbUrl ? (
              <img
                className={styles.thumbnail}
                src={file.thumbUrl}
                alt={file.name}
                onClick={() => onPreview && onPreview(file)}
              />
            ) : (
              <div className={styles.placeholder}>📄</div>
            )}
            <div className={styles.content}>
              <span className={styles.name}>{file.name}</span>
              {file.status === 'uploading' && (
                <span className={styles.uploadingText}>
                  上传中... {file.percent}%
                </span>
              )}
            </div>
          </div>
          <div className={styles.actions}>
            <span className={styles.removeBtn} onClick={() => onRemove(file)}>
              🗑️
            </span>
          </div>
        </div>
        {file.status === 'uploading' && (
          <div className={styles.progressWrapper}>
            <div
              className={styles.progressBar}
              style={{ width: `${file.percent || 0}%` }}
            />
          </div>
        )}
      </li>
    );
  }

  // 3. 照片墙模式 (picture-card)
  else {
    originNode = (
      <li
        className={`${styles.pictureCardItem} ${file.status === 'error' ? styles.error : ''}`}
      >
        {file.status === 'uploading' ? (
          <div className={styles.uploading}>
            <span>上传中</span>
            <span>{file.percent}%</span>
          </div>
        ) : (
          <img
            className={styles.img}
            src={file.thumbUrl}
            alt={file.name}
            onClick={() => onPreview && onPreview(file)}
          />
        )}
        <span
          className={styles.removeBadge}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(file);
          }}
        >
          ×
        </span>
      </li>
    );
  }
  // 🚀 终极判断：如果用户传了 itemRender，我们就把画笔交给他，否则渲染我们自己的 originNode
  return itemRender ? <>{itemRender(originNode, file)}</> : originNode;
};
