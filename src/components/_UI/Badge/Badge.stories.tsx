import type { Meta, StoryObj } from '@storybook/vue3';

import Badge from './Badge.vue';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'error', 'todo', 'inProgress', 'done', 'neutral'],
      defaultValue: 'neutral'
    },
    label: {
      control: 'text',
      defaultValue: 'Badge'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    color: 'neutral',
    label: 'Badge'
  }
};

export const Success: Story = {
  args: {
    color: 'success',
    label: 'Success'
  }
};

export const Error: Story = {
  args: {
    color: 'error',
    label: 'Error'
  }
};

export const Todo: Story = {
  args: {
    color: 'todo',
    label: 'Todo'
  }
};

export const InProgress: Story = {
  args: {
    color: 'inProgress',
    label: 'In Progress'
  }
};

export const Done: Story = {
  args: {
    color: 'done',
    label: 'Done'
  }
};
