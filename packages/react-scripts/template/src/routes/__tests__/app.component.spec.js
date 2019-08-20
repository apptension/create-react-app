import React from 'react';
import { shallow, mount } from 'enzyme';
import { clone } from 'ramda';
import useRouter from 'use-react-router';
import { DEFAULT_LOCALE, LOCALES } from '../../i18n';
import { App } from '../app.component';
import { store } from '../../../__mocks__/store';
import { StartupActions } from '../../modules/startup';
import { LocalesActions } from '../../modules/locales';

const mockDispatch = jest.fn();
let mockStore = clone(store);

jest.mock('react-redux', () => ({
  useSelector: selector => selector(mockStore),
  useDispatch: () => mockDispatch,
}));

jest.mock('use-react-router');

describe('App: Component', () => {
  const children = <div className="app__children">Children</div>;
  const defaultProps = {
    setLanguage: () => {},
    startup: () => {},
    language: DEFAULT_LOCALE,
    match: { params: { lang: LOCALES.POLISH } },
  };

  const component = props => (
    <App {...defaultProps} {...props}>
      {children}
    </App>
  );

  beforeEach(() => {
    useRouter.mockReturnValue({ match: { params: { lang: LOCALES.POLISH } } });
  });

  afterEach(() => {
    mockStore = clone(store);
    mockDispatch.mockClear();
    useRouter.mockClear();
  });

  it('should not render App when language is not set', () => {
    mockStore.locales.language = undefined;

    const wrapper = shallow(component({ language: undefined }));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render App when language is set', () => {
    mockStore.locales.language = 'en';

    const wrapper = shallow(component());
    expect(wrapper).toMatchSnapshot();
  });

  it('should set proper language based on url', () => {
    mount(component());

    expect(mockDispatch).toHaveBeenCalledWith(LocalesActions.setLanguage(LOCALES.POLISH));
  });

  it('should set default language based on url when url is not matched', () => {
    useRouter.mockReturnValue({ match: { params: { lang: undefined } } });
    mount(component());

    expect(mockDispatch).toHaveBeenCalledWith(LocalesActions.setLanguage(DEFAULT_LOCALE));
  });

  it('should set proper language when url changes', () => {
    const wrapper = mount(component());

    mockDispatch.mockClear();
    useRouter.mockReturnValue({ match: { params: { lang: LOCALES.ENGLISH } } });

    wrapper.setProps({});

    expect(mockDispatch).toHaveBeenCalledWith(LocalesActions.setLanguage(LOCALES.ENGLISH));
  });

  it('should call startup on mount', () => {
    mount(component());

    expect(mockDispatch).toHaveBeenCalledWith(StartupActions.startup());
  });
});
