import { configure, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import { theme } from '../src/app/static/styles';

import Container from './components/Container';

// automatically import all files ending in *.stories.js
const components = require.context('../src/app', true, /.stories.js$/);

function loadStories() {
  components.keys().forEach((filename) => components(filename));
}

const CenterDecorator = (storyFn) => <Container>{storyFn()}</Container>;

addDecorator(CenterDecorator);
addDecorator(muiTheme(theme));

configure(loadStories, module);
