import "../app/globals.css";
import type { Preview } from '@storybook/nextjs'
import { withScreenshot } from "storycap";

export const decorators = [
  withScreenshot,
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    screenshot: {
      // Put global screenshot parameters(e.g. viewport)
    },
  }
};

export default preview;