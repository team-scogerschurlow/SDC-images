import React from 'react';
import { shallow } from 'enzyme';

import RightArrow from './RightArrow';


  function setup() {
    const wrapper = shallow(<RightArrow />);
    return { wrapper };
  }
  
  describe('Slide', () => {
    it('Should render', () => {
      const { wrapper } = setup();
      expect(wrapper.children()).toHaveLength(1);
    });

});