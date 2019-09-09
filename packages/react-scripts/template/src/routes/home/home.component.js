import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { compose } from 'ramda';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './home.messages';
import { LanguageSwitcher } from '../../shared/components/languageSwitcher';
import { Container, Logo } from './home.styles';
import { H1 } from '../../theme/typography';

export const HomeComponent = ({ intl }) => {
  return (
    <Container>
      <Helmet title={intl.formatMessage(messages.pageTitle)} />

      <H1>
        <FormattedMessage {...messages.welcome} />
      </H1>

      <Logo />

      <LanguageSwitcher />
    </Container>
  );
};

HomeComponent.propTypes = {
  intl: PropTypes.object.isRequired,
};

export const Home = compose(injectIntl)(HomeComponent);
