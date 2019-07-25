import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { compose } from 'ramda';
import { withRouter } from 'react-router';

import { Select } from './languageSwitcher.styles';
import { appLocales } from '../../../i18n';
import { selectLocalesLanguage } from '../../../modules/locales/locales.selectors';

export const LanguageSwitcherComponent = ({ match, history }) => {
  const language = useSelector(selectLocalesLanguage);

  const handleChange = e => {
    history.push(match.url.replace(match.params.lang, e.target.value));
  };

  return (
    <Select value={language} onChange={handleChange}>
      {appLocales.map((locale, index) => (
        <option key={index} value={locale}>
          {locale}
        </option>
      ))}
    </Select>
  );
};

LanguageSwitcherComponent.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export const LanguageSwitcher = compose(withRouter)(LanguageSwitcherComponent);
