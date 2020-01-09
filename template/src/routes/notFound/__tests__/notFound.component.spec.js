import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundComponent } from '../notFound.component';

describe('NotFound: Component', () => {
  const defaultProps = {};

  const component = props => <NotFoundComponent {...defaultProps} {...props} />;

  it('should render correctly', () => {
    const wrapper = shallow(component());
    expect(wrapper).toMatchSnapshot();
  });
});
