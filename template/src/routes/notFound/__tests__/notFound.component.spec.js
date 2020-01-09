import React from 'react';

import { NotFoundComponent } from '../notFound.component';
import { makeContextRenderer } from 'utils/testUtils';

describe('NotFound: Component', () => {
  const defaultProps = {};

  const component = props => <NotFoundComponent {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container.firstChild).toMatchSnapshot();
  });
});
