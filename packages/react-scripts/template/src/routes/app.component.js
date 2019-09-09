import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import useRouter from 'use-react-router';

import { translationMessages, DEFAULT_LOCALE } from '../i18n';
import { GlobalStyle } from '../theme/global';
import messages from './app.messages';
import { LocalesActions, selectLocalesLanguage } from '../modules/locales';
import { StartupActions } from '../modules/startup';

export const App = ({ children }) => {
  const language = useSelector(selectLocalesLanguage);
  const dispatch = useDispatch();
  const { match } = useRouter();

  useEffect(() => {
    dispatch(StartupActions.startup());
  }, []);

  useEffect(() => {
    dispatch(LocalesActions.setLanguage(match.params.lang || DEFAULT_LOCALE));
  }, [match]);

  if (!language) {
    return null;
  }

  return (
    <IntlProvider key={language} locale={language} messages={translationMessages[language]}>
      <Fragment>
        <FormattedMessage {...messages.pageTitle}>
          {pageTitle => <Helmet titleTemplate={`%s - ${pageTitle}`} defaultTitle={pageTitle} />}
        </FormattedMessage>

        <GlobalStyle />
        {React.Children.only(children)}
      </Fragment>
    </IntlProvider>
  );
};

App.propTypes = {
  children: PropTypes.node,
};
