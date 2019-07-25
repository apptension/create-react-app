import React from 'react';
import { storiesOf } from '@storybook/react';
import withRouter from 'storybook-react-router';

import withRedux from '../../utils/withRedux';
import { store } from '../../../../__mocks__/store';
import { LanguageSwitcherComponent as LanguageSwitcher } from './languageSwitcher.component';

const defaultProps = {
  match: {},
  history: {},
};

storiesOf('LanguageSwitcher', module)
  .addDecorator(withRedux(store))
  .addDecorator(withRouter())
  .add('Default', () => <LanguageSwitcher {...defaultProps} />);
