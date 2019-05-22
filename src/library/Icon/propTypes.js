/* @flow */
import { bool, node, number, oneOfType, string } from 'prop-types';

export const iconPropTypes = {
  /* TargetX Custom Props */
  clickable: bool,
  cursor: string,

  /* Built-In Props */
  children: node,
  color: string,
  rtl: bool,
  size: oneOfType([number, string]),
  title: string
};
