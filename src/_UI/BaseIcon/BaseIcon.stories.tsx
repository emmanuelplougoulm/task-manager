import type { Meta, StoryObj } from '@storybook/vue3';

import { BaseIcon } from '@/_UI/index';

const meta: Meta<typeof BaseIcon> = {
  title: 'UI/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: ['arrow-down', 'pencil', 'garbage'],
      defaultValue: 'arrow-down'
    }
  }
};

export default meta;
type Story = StoryObj<typeof BaseIcon>;

export const ArrowDown: Story = {
  args: {
    iconName: 'arrow-down'
  }
};

export const Pencil: Story = {
  args: {
    iconName: 'pencil'
  }
};

export const Garbage: Story = {
  args: {
    iconName: 'garbage'
  }
};
