import React from 'react';
import { shallow } from 'enzyme';

import LeftArrow from './LeftArrow';


  function setup() {
    const wrapper = shallow(<LeftArrow />);
    return { wrapper };
  }
  
  describe('Slide', () => {
    it('Should render', () => {
      const { wrapper } = setup();
      expect(wrapper.children()).toHaveLength(1);
    });

});