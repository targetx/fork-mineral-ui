/* @flow */
import { bool, node, number, oneOfType, string } from 'prop-types';

export const iconPropTypes = {
  /* TargetX Custom Props */
  bottom: string,
  clickable: bool,
  cursor: string,
  left: string,
  margin: oneOfType([number, string]),
  marginBottom: oneOfType([number, string]),
  marginHorizontal: oneOfType([number, string]),
  marginLeft: oneOfType([number, string]),
  marginRight: oneOfType([number, string]),
  marginTop: oneOfType([number, string]),
  marginVertical: oneOfType([number, string]),
  right: string,
  top: string,
  verticalAlign: string,

  /* Built-In Props */
  children: node,
  color: string,
  rtl: bool,
  size: oneOfType([number, string]),
  title: string
};
