/* @flow */
import type { ComponentTheme, ComponentThemeFn } from '../themes/types';
import { SIZE, TYPE, VARIANT } from './constants';

type Size = $Keys<typeof SIZE>;
type Type = $Keys<typeof TYPE>;
type Variant = $Keys<typeof VARIANT>;

export type TextInputProps = {
  /* TargetX Custom props */
  borderRadius?: number | string,
  textAlign?: string,

  className?: string,
  defaultValue?: string,
  disabled?: boolean,
  htmlSize?: number | string,
  iconStart?: React$Element<*>,
  iconEnd?: React$Element<*>,
  inputRef?: (
    node: ?React$Component<*, *>
  ) => void | { current: { [key: string]: any } },
  rootProps?: Object,
  invalid?: boolean,
  onChange?: (event: SyntheticEvent<>) => void,
  prefix?: string | React$Element<*>,
  readOnly?: boolean,
  required?: boolean,
  size?: Size,
  suffix?: string | React$Element<*>,
  type?: Type,
  value?: string,
  variant?: Variant
};

export type TextInputDefaultProps = {
  size: Size,
  type: Type
};

export type TextInputThemeFn = ComponentThemeFn<TextInputTheme>;
export type TextInputTheme = ComponentTheme<TextInputThemeKeys>;
type TextInputThemeKeys = {|
  TextInput_backgroundColor: ThemeValue,
  TextInput_borderColor: ThemeValue,
  TextInput_borderColor_active: ThemeValue,
  TextInput_borderColor_focus: ThemeValue,
  TextInput_borderColor_hover: ThemeValue,
  TextInput_borderRadius: ThemeValue,
  TextInput_borderWidth: ThemeValue,
  TextInput_boxShadow_active: ThemeValue,
  TextInput_boxShadow_focus: ThemeValue,
  TextInput_color: ThemeValue,
  TextInput_color_placeholder: ThemeValue,
  TextInput_color_readOnly: ThemeValue,
  TextInput_fontSize: ThemeValue,
  TextInput_fontSize_small: ThemeValue,
  TextInput_height_small: ThemeValue,
  TextInput_height_medium: ThemeValue,
  TextInput_height_large: ThemeValue,
  TextInput_height_jumbo: ThemeValue,
  TextInput_paddingHorizontal: ThemeValue,
  TextInput_paddingHorizontal_small: ThemeValue,
  TextInputIcon_color: ThemeValue,
  TextInputIcon_marginHorizontal: ThemeValue
|};
