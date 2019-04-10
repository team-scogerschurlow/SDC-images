import React from 'react';
import { mount } from 'enzyme';

import Hero from './hero';


  function setup() {
    const wrapper = mount(<Hero />);
    return { wrapper };
  }
  
  describe('Hero', () => {
    it('Should render', () => {
     expect(mount(<Hero />))
    });

    // it('Should render a div', () => {
    //     const { wrapper } = setup();
    //     expect(wrapper.children()).toBeGreaterThan(0);
    //   });
});