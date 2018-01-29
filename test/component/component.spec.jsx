/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Component from '../../src/index';


describe('Component', function describe() {
  it('is rendered', function it() {
    const wrapper = mount(
      <Component />,
    );

    expect(wrapper).to.be.defined;
  });
});
