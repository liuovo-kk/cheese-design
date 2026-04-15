import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@cheese-design/components';

const meta: Meta<typeof Button> = {
  title: '通用组件/Button 按钮',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Cheese 主按钮',
  },
};

export const Default: Story = {
  args: {
    type: 'default',
    children: '默认按钮',
  },
};
