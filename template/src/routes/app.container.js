import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DEFAULT_LOCALE } from '../i18n';
import { selectLocalesLanguage } from '../modules/locales';
import initializeFontFace from '../theme/initializeFontFace';
import { startup } from '../modules/startup/startup.redux';
import { setLanguage } from '../modules/locales/locales.redux';
import { AppComponent } from './app.component';

export const AppContainer = ({ children }) => {
  const language = useSelector(selectLocalesLanguage);
  const dispatch = useDispatch();
  const { lang } = useParams();

  useEffect(() => {
    dispatch(startup());
    initializeFontFace();
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLanguage(lang || DEFAULT_LOCALE));
  }, [lang, dispatch]);

  if (!language) {
    return null;
  }

  const componentProps = {
    language,
    children,
  };

  return <AppComponent {...componentProps} />;
};

AppContainer.propTypes = {
  children: PropTypes.node,
};
