import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
// Example component import
import Example from '../src/example.component';

const stories = storiesOf('ReactComponentTemplate', module);

// add simple story with knobs (component props)
stories.add('Example', () => <Example example={text('Greeting text', 'Helou')} />);
