/* Storybook configuration file */
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

withOptions({
  name: "React Component Template",
  addonPanelInRight: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// Add withKnobs decorator globally in every Component story
addDecorator(withKnobs);

// Load Component Stories
function loadStories() { require('../stories/index.story.jsx'); }

configure(loadStories, module);
