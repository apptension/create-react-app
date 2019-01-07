import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'ramda';

import messages from './maintainersList.messages';
import { Container, List, ListItem } from './maintainerList.styles';
import { H2, Link } from '../../../theme/typography';


export class MaintainerListComponent extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Container>
        <H2>
          <FormattedMessage {...messages.title} />
        </H2>

        <List>
          {this.props.items.toArray().map((item, key) => (
            <ListItem key={key}>
              <Link href={`mailto:${item.get('email')}`}>
                {item.get('firstName')} {item.get('lastName')}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}

export const MaintainerList = compose(
  injectIntl,
)(MaintainerListComponent);
