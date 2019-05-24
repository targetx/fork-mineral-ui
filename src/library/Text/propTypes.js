/* @flow */
import { bool, node, number, oneOf, oneOfType, string } from 'prop-types';
import { ALIGN, APPEARANCE, FONT_WEIGHT } from './constants';

export const textPropTypes = {
  /* TargetX Custom Props */
  altFont: string,
  bold: bool,
  fontFamily: string,
  fontSize: string,
  lineHeight: string,

  /* Built-In Props */
  align: oneOf(Object.keys(ALIGN)),
  appearance: oneOf(Object.keys(APPEARANCE)),
  children: node.isRequired,
  color: string,
  fontWeight: oneOfType([oneOf(Object.keys(FONT_WEIGHT)), number]),
  inherit: bool,
  noMargins: bool,
  parentAs: string,
  truncate: oneOfType([bool, number, string])
};
