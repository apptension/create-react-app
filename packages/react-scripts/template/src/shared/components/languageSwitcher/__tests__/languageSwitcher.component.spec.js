import React from 'react';
import { shallow } from 'enzyme';

import { LanguageSwitcherComponent as LanguageSwitcher } from '../languageSwitcher.component';
import { Select } from '../languageSwitcher.styles';
import { DEFAULT_LOCALE } from '../../../../i18n';
import { store as mockStore } from '../../../../../__mocks__/store';

jest.mock('react-redux', () => ({
  useSelector: selector => selector(mockStore),
}));

describe('LanguageSwitcher: Component', () => {
  const defaultProps = {
    language: DEFAULT_LOCALE,
    match: { params: { lang: DEFAULT_LOCALE }, url: `/${DEFAULT_LOCALE}/some/custom/url` },
    history: { push: () => {} },
  };

  const component = props => <LanguageSwitcher {...defaultProps} {...props} />;

  it('should redirect after option click', () => {
    const history = { push: jest.fn() };
    const wrapper = shallow(component({ history }));

    const event = { target: { value: 'not-default' } };
    wrapper.find(Select).prop('onChange')(event);

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith('/not-default/some/custom/url');
  });
});
