import type { Preview } from '@storybook/vue3';
import '../src/assets/base.css';
import '../src/assets/main.css';
import '../src/assets/variables.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
