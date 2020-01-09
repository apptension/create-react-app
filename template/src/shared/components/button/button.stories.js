import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from './button.component';
import { BUTTON_TYPE_SECONDARY } from './button.constants';

const defaultProps = {
  children: 'Press me',
  onClick: action('Clicked me'),
};

storiesOf('Button', module).add('Primary', () => <ButtonComponent {...defaultProps} />);
storiesOf('Button', module).add('Primary - Disabled', () => <ButtonComponent {...defaultProps} disabled />);
storiesOf('Button', module).add('Secondary', () => <ButtonComponent {...defaultProps} mode={BUTTON_TYPE_SECONDARY} />);
storiesOf('Button', module).add('Secondary - Disabled', () => (
  <ButtonComponent {...defaultProps} disabled mode={BUTTON_TYPE_SECONDARY} />
));
