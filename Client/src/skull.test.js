
import React from 'react';
import { shallow } from 'enzyme';

import Skull from './skull';

describe('Examining the syntax of Jest tests', () => {
   
    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
     });
  });

  function setup() {
    const wrapper = shallow(<Skull />);
    return { wrapper };
  }
  
  describe('Skull', () => {
    it('Should render', () => {
      const { wrapper } = setup();
      expect(wrapper.children()).toHaveLength(1);
    });
   
    it('should render a .skull', () => {
      const wrapper = shallow(<Skull />);
      expect(wrapper.find('.skull')).toHaveLength(1);
    });

    // it('should change state/view', () => {
    //   const wrapper = shallow(<Skull />);
    //   wrapper.find('a').invoke(changeView)().then(()=> {
    //   expect(wrapper.setState({view: false}))
    //   })
    




   

    // it('Should change view and update form state', () => {
    //   const { wrapper } = setup();
    //   const event = {
    //     target: { name: 'username', value: 'testvalue' },
    //   };
    //   wrapper.instance().onHandleChangeForm(event);
    //   wrapper.update();
    //   expect(wrapper.state().form.username).toBe('testvalue');
    // });
    // it('Should call onToggleSnackbar & set snackbar to true', () => {
    //   const { wrapper } = setup();
    //   wrapper.instance().onToggleSnackbar({ message: 'test' });
    //   wrapper.update();
    //   const el = wrapper.find('WithStyles(Snackbar)');
    //   expect(el.prop('open')).toBe(true);
    // });

  });

  

//  const wrapper = shallow(<Foo />);