import React from 'react';
import { shallow } from 'enzyme';

import Slider from './Slider';


  function setup() {
    const wrapper = shallow(<Slider />);
    return { wrapper };
  }
  
  describe('Slider', () => {
    it('Should render', () => {
     expect(shallow(<Slider />))
    });

});