import '../src/index.css';
import './preview.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <div className="dark bg-[#121212]" style={{ minHeight: '100vh', width: '100%' }}>
        <div className="flex min-h-screen items-center justify-center p-8">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {},
    },
  },
};

export default preview;
