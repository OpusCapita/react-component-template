/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Component from '../../src/index';

describe('Component', () => {
  it('is rendered', () => {
    const wrapper = mount(<Component />);
    expect(wrapper).to.exist;
  });
});
