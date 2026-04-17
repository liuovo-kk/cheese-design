// packages/components/src/Input/Input.tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

// 使用 Omit 剔除原生 input 自带的 size 属性（因为它只接收数字），换成我们自己的字符串尺寸
export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix'
> {
  size?: 'small' | 'middle' | 'large';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const InternalInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      className,
      size = 'middle',
      disabled = false,
      prefix,
      suffix,
      ...rest
    } = props;

    // 这里的 wrapperClasses 是包在外层的 div 的样式
    const wrapperClasses = classNames(
      styles.inputWrapper,
      size && styles[size],
      disabled && styles.disabled,
      className,
    );

    return (
      <div className={wrapperClasses}>
        {/* 渲染前缀插槽 */}
        {prefix && <span className={styles.prefix}>{prefix}</span>}

        {/* 核心原生 input */}
        <input
          ref={ref}
          className={styles.input}
          disabled={disabled}
          {...rest}
        />

        {/* 渲染后缀插槽 */}
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    );
  },
);

InternalInput.displayName = 'Input';
