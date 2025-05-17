import type { Meta, StoryObj } from '@storybook/vue3';

import HomeHeader from './Header.vue';

const meta: Meta<typeof HomeHeader> = {
  title: 'Components/HomeHeader',
  component: HomeHeader,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Bienvenue sur MangoPay',
      description: 'Titre affiché à côté du logo'
    }
  }
};
export default meta;

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
  args: {
    title: 'Bienvenue sur MangoPay'
  }
};
