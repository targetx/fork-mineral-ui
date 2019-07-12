/* @flow */
import type { ButtonGroupThemeFn } from './types';

export const buttonGroupTheme: ButtonGroupThemeFn = (baseTheme) => ({
  ButtonGroupButton_backgroundColor_checkedDisabled: baseTheme.color_gray_40,
  ButtonGroupButton_border_disabled: `solid 1px #3b9bdd`,
  ButtonGroupButton_borderColor_active: '3b9bdd',
  ButtonGroupButton_borderColor_hover: '#3b9bdd',
  ButtonGroupButton_borderStartColor: '#3b9bdd',
  ButtonGroupButton_borderStartColor_checked: 'currentcolor',
  ButtonGroupButton_color_checkedDisabled: baseTheme.color_gray_60,

  ...baseTheme
});
