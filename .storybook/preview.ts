import '@styles/base.css';
import '@styles/main.css';
import '@styles/variables.css';

import type { Preview } from '@storybook/vue3';

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
