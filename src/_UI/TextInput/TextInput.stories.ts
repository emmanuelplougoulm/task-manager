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
    error: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Username',
    text: '',
    type: 'text',
    error: ''
  }
};

export const WithError: Story = {
  args: {
    label: 'Email',
    text: '',
    type: 'email',
    error: 'This field is required'
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    text: '',
    type: 'password',
    error: ''
  }
};
