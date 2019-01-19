import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { fromJS } from 'immutable';

import { Home } from '../home.component';
import { DEFAULT_LOCALE, LOCALES } from '../../../i18n';


describe('Home: Component', () => {
  const defaultProps = {
    items: fromJS([{ id: 1 }, { id: 2 }, { id: 3 }]),
    intl: { formatMessage: ({ id }) => id },
    language: DEFAULT_LOCALE,
    fetchMaintainers: () => {},
  };

  const component = (props) => (
    <Home {...defaultProps} {...props} />
  );

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should fetch maintainers on mount', () => {
    const fetchMaintainers = spy();
    shallow(component({ fetchMaintainers }));

    expect(fetchMaintainers).to.have.been.calledOnce;
    expect(fetchMaintainers).to.have.been.calledWith(DEFAULT_LOCALE);
  });

  it('should fetch maintainers when language changes', () => {
    const fetchMaintainers = spy();
    const wrapper = shallow(component({ fetchMaintainers }));

    fetchMaintainers.resetHistory();
    wrapper.setProps({ language: LOCALES.POLISH });

    expect(fetchMaintainers).to.have.been.calledOnce;
    expect(fetchMaintainers).to.have.been.calledWith(LOCALES.POLISH);
  });
});
