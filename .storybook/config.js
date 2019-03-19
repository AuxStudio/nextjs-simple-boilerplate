import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const components = require.context('../src/app/components', true, /.stories.js$/);

function loadStories() {
  components.keys().forEach((filename) => components(filename));
}

configure(loadStories, module);
