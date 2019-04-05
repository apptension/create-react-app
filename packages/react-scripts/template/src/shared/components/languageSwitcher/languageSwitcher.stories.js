import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { LanguageSwitcher } from './languageSwitcher.component';
import { LOCALES } from '../../../i18n';

const actions = actions('replace', 'push');

const defaultProps = {
  language: LOCALES.ENGLISH,
  match: {
    url: {
      replace: actions.replace,
    },
    params: {
      lang: LOCALES.ENGLISH,
    },
  },
  history: {
    push: actions.push,
  },
};

storiesOf('LanguageSwitcher', module).add('Default', () => <LanguageSwitcher {...defaultProps} />);
