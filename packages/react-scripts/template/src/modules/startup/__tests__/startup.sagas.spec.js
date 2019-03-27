import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import mockApi from '../../../shared/utils/mockApi';
import { watchStartup } from '../startup.sagas';
import {
  StartupActions,
  StartupTypes
} from '../startup.redux';


describe('Startup: sagas', () => {
  const defaultState = Immutable({});

  const getSagaTester = (initialState = {}) => {
    const sagaTester = new SagaTester({
      initialState: defaultState.mergeDeep(initialState),
    });
    sagaTester.start(watchStartup);
    return sagaTester;
  };

  it('should implement a test', () => {
    const sagaTester = getSagaTester();

    sagaTester.dispatch(StartupActions.noop());

    expect(sagaTester.getCalledActions()).to.deep.equal([StartupActions.noop()]);
  });
});
