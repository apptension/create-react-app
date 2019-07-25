import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import { compose } from 'ramda';

import messages from './notFound.messages';
import { Container } from './notFound.styles';
import { H1 } from '../../theme/typography';

export const NotFoundComponent = ({ intl }) => {
  return (
    <Container>
      <Helmet title={intl.formatMessage(messages.pageTitle)} />

      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
    </Container>
  );
};

NotFoundComponent.propTypes = {
  intl: PropTypes.object.isRequired,
};

export const NotFound = compose(injectIntl)(NotFoundComponent);
