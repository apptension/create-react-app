import { expect } from 'chai';
import { spy } from 'sinon';

import { mapDispatchToProps } from '../home.container';
import { MaintainersActions } from '../../../modules/maintainers/maintainers.redux';


describe('App: Container', () => {
  describe('mapDispatchToProps', () => {
    it('should call MaintainersActions.fetchMaintainers', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).fetchMaintainers();

      expect(dispatch).to.have.been.calledWith(MaintainersActions.fetch());
    });
  });
});
