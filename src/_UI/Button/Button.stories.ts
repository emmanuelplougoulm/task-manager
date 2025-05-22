import type { Meta, StoryObj } from '@storybook/vue3';

import { Button } from '@/_UI/index';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Click me'
    },
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click'
  }
};

export const CustomLabel: Story = {
  args: {
    label: 'Add'
  }
};

export const LongLabel: Story = {
  args: {
    label: 'This is a long label'
  }
};
