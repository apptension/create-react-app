import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../modules/store';

export default (initialStore = {}) => story => {
  const store = configureStore(initialStore);
  return <Provider store={store}>{story()}</Provider>;
};
