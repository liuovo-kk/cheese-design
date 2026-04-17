import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './index';

describe('Input 组件测试', () => {
  // 1. 基础逻辑与快照测试
  test('能够正确渲染基础输入框，并且匹配快照', () => {
    const { asFragment } = render(<Input placeholder="请输入内容" />);
    expect(screen.getByPlaceholderText('请输入内容')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  // 2. 自定义插槽测试 (前缀与后缀)
  test('能够正确渲染 prefix 和 suffix', () => {
    render(<Input prefix="￥" suffix="RMB" />);
    expect(screen.getByText('￥')).toBeInTheDocument();
    expect(screen.getByText('RMB')).toBeInTheDocument();
  });

  // 3. UI 交互测试 (模拟用户输入)
  test('输入内容时，应该正常触发 onChange 事件', () => {
    const handleChange = jest.fn();
    render(<Input placeholder="可输入" onChange={handleChange} />);

    const inputEl = screen.getByPlaceholderText('可输入');
    fireEvent.change(inputEl, { target: { value: 'cheese' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputEl).toHaveValue('cheese');
  });

  // 4. 边界情况测试 (禁用状态拦截)
  test('禁用状态下，原生 input 应被彻底禁用', () => {
    render(<Input disabled placeholder="被禁用" />);
    const inputEl = screen.getByPlaceholderText('被禁用');
    expect(inputEl).toBeDisabled();
  });

  // 5. 样式与尺寸分支覆盖测试
  test('支持传入自定义 className 和大尺寸 size', () => {
    const { container } = render(
      <Input className="custom-class" size="large" />,
    );
    // identity-obj-proxy 会把 styles.large 直接映射为 'large'
    expect(container.firstChild).toHaveClass(
      'custom-class',
      'large',
      'inputWrapper',
    );
  });
});

describe('Input.Password 组件组合模式测试', () => {
  // 1. 基础属性测试
  test('默认应该渲染为 password 类型的输入框', () => {
    render(<Input.Password placeholder="密码输入" />);
    const inputEl = screen.getByPlaceholderText('密码输入');
    expect(inputEl).toHaveAttribute('type', 'password');
  });

  // 2. 核心状态交互测试 (点击小眼睛切换明文/密文)
  test('点击小眼睛图标，可以完美切换明文和密文状态', () => {
    render(<Input.Password placeholder="密码输入" />);
    const inputEl = screen.getByPlaceholderText('密码输入');

    // 默认是密文，图标为闭眼（👁️）
    const toggleIcon = screen.getByText('👁️');

    // 第一次点击：切换为明文
    fireEvent.click(toggleIcon);
    expect(inputEl).toHaveAttribute('type', 'text');
    expect(screen.getByText('🙈')).toBeInTheDocument(); // 图标应变为睁眼

    // 第二次点击：切换回密文
    fireEvent.click(screen.getByText('🙈'));
    expect(inputEl).toHaveAttribute('type', 'password');
    expect(screen.getByText('👁️')).toBeInTheDocument();
  });

  // 3. 边界拦截测试 (禁用时小眼睛失效)
  test('禁用状态下，点击小眼睛绝对不能切换类型', () => {
    render(<Input.Password disabled placeholder="禁用密码" />);
    const inputEl = screen.getByPlaceholderText('禁用密码');
    const toggleIcon = screen.getByText('👁️');

    // 尝试强行点击
    fireEvent.click(toggleIcon);

    // 验证：防线未被突破，类型依然是 password
    expect(inputEl).toHaveAttribute('type', 'password');
  });
});
