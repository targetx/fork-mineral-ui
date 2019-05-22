/* @flow */
import {
  bool,
  element,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  string
} from 'prop-types';
import { SIZE, VARIANT } from './constants';

export const buttonPropTypes = {
  /* TargetX Custom Props */
  htmlFor: string,
  justifyContent: string,
  margin: oneOfType([number, string]),
  marginBottom: oneOfType([number, string]),
  marginHorizontal: oneOfType([number, string]),
  marginLeft: oneOfType([number, string]),
  marginRight: oneOfType([number, string]),
  marginTop: oneOfType([number, string]),
  marginVertical: oneOfType([number, string]),
  rel: string,
  target: string,
  width: string,

  /* Built-In Props */
  children: node,
  circular: bool,
  disabled: bool,
  fullWidth: bool,
  iconEnd: element,
  iconStart: element,
  minimal: bool,
  onClick: func,
  primary: bool,
  size: oneOf(Object.keys(SIZE)),
  type: string,
  variant: oneOf(Object.keys(VARIANT))
};
