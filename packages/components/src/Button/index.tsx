import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

//定义组件的属性
export interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'default';
  size?: 'small' | 'middle' | 'large';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

//实现组件逻辑
export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  size = 'middle',
  disabled = false,
  onClick,
}) => {
  const classes = classNames(
    styles.btn,
    type && styles[type],
    size && styles[size],
    disabled && styles.disabled,
  );
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
