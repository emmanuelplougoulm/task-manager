import type { Meta, StoryObj } from '@storybook/vue3';

import { Dropdown } from '@components/index';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      defaultValue: ''
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Select'
    },
    options: {
      control: 'object',
      defaultValue: [
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' }
      ]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Select',
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' }
    ]
  }
};

export const WithPreselected: Story = {
  args: {
    modelValue: 'option-2',
    placeholder: 'Select',
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' }
    ]
  }
};

export const CustomPlaceholder: Story = {
  args: {
    modelValue: '',
    placeholder: 'Choose an option',
    options: [
      { label: 'Alpha', value: 'alpha' },
      { label: 'Bravo', value: 'bravo' },
      { label: 'Charlie', value: 'charlie' }
    ]
  }
};
