import React from 'react';
import { shallow } from 'enzyme';

import Slide from './Slide';


  function setup() {
    const wrapper = shallow(<Slide />);
    return { wrapper };
  }
  
  describe('Slide', () => {
    it('Should render', () => {
      const { wrapper } = setup();
      expect(wrapper.children()).toHaveLength(0);
    });

});
