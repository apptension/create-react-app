import { configure } from '@storybook/react';

function loadStories() {
  // automatically import all story js files that end with *.stories.js
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
