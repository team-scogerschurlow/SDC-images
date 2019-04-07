/** Used in jest.config.js */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });





// test file
// import { shallow, mount, render } from 'enzyme';

// const wrapper = shallow(<Foo />);