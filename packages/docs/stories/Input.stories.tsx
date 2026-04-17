import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@cheese-design/components';

const meta: Meta<typeof Input> = {
  title: '数据录入组件/Input 输入框',
  component: Input,
  argTypes: {
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// 1. 基础输入框
export const Basic: Story = {
  args: {
    placeholder: '请输入内容...',
  },
};

// 2. 带前缀和后缀的输入框
export const WithPrefixAndSuffix: Story = {
  args: {
    prefix: '￥',
    suffix: 'RMB',
    placeholder: '请输入金额',
  },
};

// 3. 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '300px',
      }}
    >
      <Input size="large" placeholder="large size" />
      <Input size="middle" placeholder="middle size" />
      <Input size="small" placeholder="small size" />
    </div>
  ),
};

// 4. 组合模式：密码输入框（最核心的亮点！）
export const PasswordInput: Story = {
  render: () => <Input.Password placeholder="请输入密码..." />,
};
