import type { Meta, StoryObj } from '@storybook/vue3';

import TextInput from './TextInput.vue';

const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    text: { control: 'text' },
    type: { control: 'text', defaultValue: 'text' },
    error: { control: 'boolean', defaultValue: false }
  }
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Username',
    text: '',
    type: 'text',
    error: false
  }
};

export const WithError: Story = {
  args: {
    label: 'Email',
    text: '',
    type: 'email',
    error: true
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    text: '',
    type: 'password',
    error: false
  }
};
