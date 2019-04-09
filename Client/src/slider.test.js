import React from 'react';
import { mount } from 'enzyme';

import Slider from './Slider';
import Skull from './skull'


  function setup() {
    const wrapper = mount(<Slider />);
    return { wrapper };
  }
  
  describe('Slider', () => {
    it('Should render', () => {
     expect(mount(<Slider />))
    });

    it('should call loadPics on mount', () => {
      const component = mount(
	    	<Slider/>
      );
      const instance = component.instance();

      jest.spyOn(instance, 'loadPics')
      expect(instance.loadPics.toHaveBeenCalled);
    })

    it('Does not show the editor', () => {
	    const component = mount(
	    	<Slider/>
	    );
	    component.setState({view: true});
	    expect(component.find('.hero-main').length).toBe(0);
    });

    it('Does not show hero if view is true', () => {
	    const component = mount(
	    	<Slider/>
	    );
	    component.setState({view: true});
	    expect(component.find('.hero-main').length).toBe(0);
    });

    it('Does show hero if view is false', () => {
	    const component = mount(
	    	<Slider/>
	    );
	    component.setState({view: false});
	    expect(component.find('.hero-main').length).toBeGreaterThan(0);
    });

    it('Does show slider if view is true', () => {
	    const component = mount(
	    	<Slider/>
	    );
	    component.setState({view: true});
	    expect(component.find('.slider').length).toBeGreaterThan(0);
    });

    it('Does show leftarrow if view is true', () => {
	    const component = mount(
	    	<Slider/>
	    );
	    component.setState({view: true});
	    expect(component.find('.backarrow').length).toBeGreaterThan(0);
    });

    it('Does show rightarrow if view is true', () => {
	    const component = mount(
	    	<Slider/>
	    );
	    component.setState({view: true});
	    expect(component.find('.nextArrow').length).toBeGreaterThan(0);
    });

    it('Does show Skull if view is true', () => {
	    const component = mount(
	    	<Slider/>
	    );
	    component.setState({view: true});
	    expect(component.find('.skull').length).toBeGreaterThan(0);
    });


});