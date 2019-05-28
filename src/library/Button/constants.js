/* @flow */
import { pxToEm } from '../styles';

export const ICON_SIZE = {
  small: 'medium',
  medium: pxToEm(20), // TargetX Custom Style
  large: pxToEm(24),
  jumbo: pxToEm(24)
};

export const SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};

export const VARIANT = {
  /* TargetX Custom Variant */
  grayscale: 'grayscale',
  salesforce: 'salesforce',

  danger: 'danger',
  success: 'success',
  warning: 'warning'
};
