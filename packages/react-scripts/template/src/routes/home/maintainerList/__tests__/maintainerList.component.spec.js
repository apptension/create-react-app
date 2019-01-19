import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { MaintainerListComponent as MaintainerList } from '../maintainerList.component';


describe('MaintainerList: Component', () => {
  const defaultProps = {
    items: fromJS([
      { email: 'email1@domain.com', lastName: 'maintainer1' },
      { email: 'email2@domain.com', lastName: 'maintainer2' },
    ]),
  };

  const component = (props) => (
    <MaintainerList {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
