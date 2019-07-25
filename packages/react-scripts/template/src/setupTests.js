import '@babel/polyfill';
import 'isomorphic-fetch';
import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';

Enzyme.configure({ adapter: new Adapter() });

nock.disableNetConnect();

afterEach(() => {
  nock.cleanAll();
});
