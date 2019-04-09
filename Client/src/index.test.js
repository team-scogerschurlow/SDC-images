import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider'
import Skull from './skull'


function setup() {
    const wrapper = shallow(<Slider />);
    return { wrapper };
  }
  
  describe('Index', () => {
    it('Should render', () => {
      const { wrapper } = setup();
      expect(wrapper.children()).toHaveLength(1);
    });

});
  
  describe('Index', () => {
    it('Should render slider', () => {
     expect(shallow(<Slider />))
    });


});