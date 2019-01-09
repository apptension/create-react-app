import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './home.messages';
import { MaintainerList } from './maintainerList/maintainerList.component';
import { LanguageSwitcher } from '../../shared/components/languageSwitcher';
import { Container, Logo } from './home.styles';
import { H1 } from '../../theme/typography';


export class Home extends PureComponent {
  static propTypes = {
    items: PropTypes.object,
    intl: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    fetchMaintainers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchMaintainers(this.props.language);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language) {
      this.props.fetchMaintainers(this.props.language);
    }
  }

  render() {
    return (
      <Container>
        <Helmet
          title={this.props.intl.formatMessage(messages.pageTitle)}
        />

        <H1>
          <FormattedMessage {...messages.welcome} />
        </H1>

        <Logo />

        <MaintainerList items={this.props.items} />

        <LanguageSwitcher />
      </Container>
    );
  }
}
