import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Home } from './home.component';
import { MaintainersActions } from '../../modules/maintainers/maintainers.redux';
import { selectMaintainersItems } from '../../modules/maintainers/maintainers.selectors';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';


const mapStateToProps = createStructuredSelector({
  items: selectMaintainersItems,
  language: selectLocalesLanguage,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchMaintainers: MaintainersActions.fetch,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl,
  withRouter
)(Home);
