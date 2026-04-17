// packages/components/src/Input/Password.tsx
import React, { useState, forwardRef } from 'react';
import { InternalInput, type InputProps } from './Input';
import styles from './index.module.scss';

export type PasswordProps = InputProps;

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  (props, ref) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
      if (!props.disabled) {
        setVisible(!visible);
      }
    };

    // 巧妙地利用后缀插槽来实现切换可见性的按钮
    const suffixIcon = (
      <span
        className={styles.passwordIcon}
        onClick={toggleVisibility}
        style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
      >
        {visible ? '🙈' : '👁️'}
      </span>
    );

    return (
      <InternalInput
        ref={ref}
        {...props}
        // 核心魔法：根据状态动态切换原生的 type 属性
        type={visible ? 'text' : 'password'}
        suffix={suffixIcon}
      />
    );
  },
);

Password.displayName = 'Password';
