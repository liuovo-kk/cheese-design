import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';

describe('Button 组件测试', () => {
  // 1. 快照测试 & 基础逻辑测试 [cite: 37, 40]
  test('能够正确渲染默认按钮，并且匹配快照', () => {
    // asFragment 可以帮你拍下当前 DOM 的快照 [cite: 134]
    const { asFragment } = render(<Button>默认按钮</Button>);

    expect(screen.getByText('默认按钮')).toBeInTheDocument();
    // 第一次运行会自动生成一个 __snapshots__ 文件夹，以后只要 DOM 结构变了就会报错 [cite: 129, 136]
    expect(asFragment()).toMatchSnapshot();
  });

  // 2. UI 交互测试 [cite: 39]
  test('点击按钮时，应该正常触发 onClick 事件', () => {
    const handleClick = jest.fn(); // 创建一个模拟函数 [cite: 122]
    render(<Button onClick={handleClick}>点击测试</Button>);

    const buttonElement = screen.getByText('点击测试');
    fireEvent.click(buttonElement); // 模拟用户点击 [cite: 125]

    expect(handleClick).toHaveBeenCalledTimes(1); // 验证函数被调用了 1 次 [cite: 126]
  });

  // 3. 边界情况测试 [cite: 38]
  test('当 disabled 为 true 时，按钮应该被禁用，且不可触发点击事件', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        禁用按钮
      </Button>,
    );

    const buttonElement = screen.getByText('禁用按钮');
    fireEvent.click(buttonElement);

    // 验证：点击事件绝对不能被触发
    expect(handleClick).not.toHaveBeenCalled();
    // 验证：DOM 节点上确实挂载了 disabled 属性
    expect(buttonElement).toBeDisabled();
  });
});
