import type { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './Tabs.vue';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: { type: 'array' },
      defaultValue: ['list view', 'board view']
    }
  }
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: ['list view', 'board view']
  },
  render: (args) => ({
    components: { Tabs },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args">
        <template #tab-0>
          <div>This is the list view !</div>
        </template>
        <template #tab-1>
          <div>This is the board view</div>
        </template>
      </Tabs>
    `
  })
};
