import React from 'react';
import { shallow } from 'enzyme';

import { HomeComponent as Home } from '../home.component';

describe('Home: Component', () => {
  const defaultProps = {
    intl: { formatMessage: ({ id }) => id },
  };

  const component = props => <Home {...defaultProps} {...props} />;

  it('should render correctly', () => {
    const wrapper = shallow(component());
    expect(wrapper).toMatchSnapshot();
  });
});
