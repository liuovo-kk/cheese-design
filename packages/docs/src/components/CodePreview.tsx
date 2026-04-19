import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
// 引入一款极其极客的主题样式（暗黑风格）
import 'highlight.js/styles/atom-one-dark.css';

interface CodePreviewProps {
  children: React.ReactNode; // 存放真实的组件 (Story)
  code: string; // 存放要高亮的源码字符串
  language?: string; // 语言，默认 tsx
  title?: string; // 示例标题
  desc?: string; // 示例描述
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  children,
  code,
  language = 'tsx',
  title,
  desc,
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    // 极其丝滑的高亮注入
    if (codeRef.current && showCode) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language, showCode]);

  return (
    <div
      style={{
        border: '1px solid #ebedf0',
        borderRadius: 8,
        marginBottom: 24,
        overflow: 'hidden',
      }}
    >
      {/* 1. 上半部分：组件真实展示区 */}
      <div style={{ padding: '40px 24px', borderBottom: '1px solid #ebedf0' }}>
        {children}
      </div>

      {/* 2. 中间部分：标题、描述与操作区 */}
      <div
        style={{
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {title && <div style={{ fontWeight: 600, fontSize: 16 }}>{title}</div>}
        {desc && <div style={{ fontSize: 14, color: '#666' }}>{desc}</div>}

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{ cursor: 'pointer', color: '#1677ff', fontSize: 14 }}
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? '收起代码' : '显示代码 </>'}
          </span>
        </div>
      </div>

      {/* 3. 下半部分：highlight.js 源码高亮区 */}
      {showCode && (
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
      )}
    </div>
  );
};
