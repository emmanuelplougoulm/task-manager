import type { Meta, StoryObj } from '@storybook/vue3';

import HomeHeader from './Header.vue';

const meta: Meta<typeof HomeHeader> = {
  title: 'Components/Header',
  component: HomeHeader,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Welcome to task master by'
    }
  }
};
export default meta;

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
  args: {
    title: 'Welcome to task master by'
  }
};
