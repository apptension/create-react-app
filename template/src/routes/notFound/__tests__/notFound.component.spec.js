import React from 'react';
import { makeContextRenderer } from 'utils/testUtils';
import { NotFoundComponent } from '../notFound.component';

describe('NotFound: Component', () => {
  const defaultProps = {};

  const component = props => <NotFoundComponent {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render correctly', () => {
    const { container } = render();
    expect(container).toMatchSnapshot();
  });
});
