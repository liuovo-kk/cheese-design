import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
// 引入一款极其极客的主题样式（暗黑风格）
import 'highlight.js/styles/atom-one-dark.css';

interface CodePreviewProps {
  code: string;
  language?: string;
  children?: React.ReactNode; // 用于接收真实的组件展示
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  code,
  language = 'tsx',
  children,
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 核心机制：当组件挂载后，将 DOM 节点丢给 highlight.js 进行词法解析和高亮染色
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div
      style={{
        border: '1px solid #ebedf0',
        borderRadius: '6px',
        margin: '16px 0',
        overflow: 'hidden',
      }}
    >
      {/* 1. 真实组件渲染区 */}
      {children && (
        <div
          style={{
            padding: '24px',
            backgroundColor: '#ffffff',
            borderBottom: '1px dashed #ebedf0',
          }}
        >
          {children}
        </div>
      )}

      {/* 2. 源码高亮展示区 */}
      <div
        style={{
          backgroundColor: '#282c34',
          padding: '16px',
          overflowX: 'auto',
        }}
      >
        <pre style={{ margin: 0 }}>
          <code
            ref={codeRef}
            className={`language-${language}`}
            style={{
              fontFamily:
                'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              fontSize: '14px',
            }}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};
