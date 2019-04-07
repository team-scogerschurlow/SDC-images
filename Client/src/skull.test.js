
import React from 'react';
import { shallow } from 'enzyme';

import Skull from './skull';

describe('Examining the syntax of Jest tests', () => {
   
    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
     });
  });


//  const wrapper = shallow(<Foo />);