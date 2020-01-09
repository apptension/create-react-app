import React from 'react';
import { shallow } from 'enzyme';

import { HomeComponent } from '../home.component';

describe('Home: Component', () => {
  const defaultProps = {};

  const component = props => <HomeComponent {...defaultProps} {...props} />;

  it('should render correctly', () => {
    const wrapper = shallow(component());
    expect(wrapper).toMatchSnapshot();
  });
});
