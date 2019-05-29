/* @flow */
import createTheme from './createTheme';

import colors from './colors';

const themeColors = {
  [10]: colors.blue3,
  [20]: '#BADCF4',
  [30]: colors.blue2,
  [40]: colors.blue2,
  [50]: '#62AFE4',
  [60]: colors.blue1,
  [70]: colors.blue1,
  [80]: '#235F88',
  [90]: colors.blue0,
  [100]: colors.blue0
};

const dangerColors = {
  [10]: colors.red3,
  [20]: '#EDAAB1',
  [30]: colors.red2,
  [40]: colors.red2,
  [50]: '#D63C4C',
  [60]: colors.red1,
  [70]: colors.red1,
  [80]: '#990918',
  [90]: colors.red0,
  [100]: colors.red0
};

const successColors = {
  [10]: colors.green3,
  [20]: '#B6E9CF',
  [30]: colors.green2,
  [40]: colors.green2,
  [50]: '#59CC90',
  [60]: colors.green1,
  [70]: colors.green1,
  [80]: '#218651',
  [90]: colors.green0,
  [100]: colors.green0
};

const warningColors = {
  [10]: colors.yellow3,
  [20]: '#FCE3A3',
  [30]: colors.yellow2,
  [40]: colors.yellow2,
  [50]: '#F9C646',
  [60]: colors.yellow1,
  [70]: colors.yellow1,
  [80]: '#D29C15',
  [90]: colors.yellow0,
  [100]: colors.yellow0
};

const grayColors = {
  [10]: colors.grey8,
  [20]: colors.grey7,
  [30]: colors.grey6,
  [40]: colors.grey5,
  [50]: colors.grey5,
  [60]: colors.grey4,
  [70]: colors.grey3,
  [80]: colors.grey2,
  [90]: colors.grey1,
  [100]: colors.grey0,
  inflection: 50
};

export default createTheme({
  colors: {
    theme: themeColors,
    danger: dangerColors,
    success: successColors,
    warning: warningColors,
    black: colors.grey0,
    gray: grayColors,
    white: colors.white
  },

  overrides: {
    borderColor_theme_active: 'none',
    borderColor_theme_focus: 'none',
    color_disabled: colors.white,

    // Button Themes

    /* General */
    Button_borderColor_hover: colors.grey5,
    Button_borderRadius: '4.5px',
    Button_borderWidth: '1.5',
    Button_color: colors.grey5,
    Button_height_jumbo: '2.75rem',
    Button_height_large: '2.5rem',
    Button_height_medium: '2.188rem',
    ButtonContent_fontSize: '0.75em',

    /* Grayscale */
    backgroundColor_grayscalePrimary_active: colors.grey7,
    backgroundColor_grayscalePrimary_focus: colors.grey7,
    backgroundColor_grayscalePrimary_hover: colors.grey6,
    backgroundColor_grayscalePrimary: colors.grey7,
    borderColor_grayscale_active: 'none',
    borderColor_grayscale_focus: 'none',
    borderColor_grayscale_hover: 'none',
    color_grayscale: colors.grey1,
    color_grayscalePrimary: colors.grey1,
    icon_color_greyscale: colors.grey1,

    /* Salesforce */
    backgroundColor_salesforcePrimary_active: colors.salesforceBlue,
    backgroundColor_salesforcePrimary_focus: colors.salesforceBlue,
    backgroundColor_salesforcePrimary_hover: colors.salesforceBlueHover,
    backgroundColor_salesforcePrimary: colors.salesforceBlue,
    borderColor_salesforce_active: 'none',
    borderColor_salesforce_focus: 'none',
    borderColor_salesforce_hover: 'none',
    color_salesforce: colors.white,
    color_salesforcePrimary: colors.white,
    icon_color_salesforce: colors.white,

    // Checkbox Themes
    CheckboxControl_backgroundColor_checked: colors.green1,
    CheckboxControl_backgroundColor_checkedHover: colors.green2,
    CheckboxControl_borderColor: colors.grey4,
    CheckboxControl_borderColor_checked: colors.green1,
    CheckboxControl_borderColor_checkedHover: colors.green2,
    CheckboxControl_borderColor_hover: colors.grey5,
    CheckboxControl_borderRadius: '5px',
    CheckboxControl_size: '20px',
    ChoiceControl_borderWidth: '2px',

    // Link
    Link_cursor: 'pointer',

    // Text
    Text_marginBottom: 0,

    // FormField
    FormFieldLabel_color: colors.grey0,
    FormFieldLabel_fontFamily: 'Proxima Nova Semi Bold',

    // Text Area
    TextArea_borderColor_active: 'none',
    TextArea_borderColor_focus: 'none',
    TextArea_borderColor_hover: 'none',

    // Text Input
    input_backgroundColor_disabled: colors.grey8,
    FauxControl_borderColor: colors.grey7,
    TextInput_color_readOnly: colors.grey0,
    TextInput_borderColor_active: 'none',
    TextInput_borderColor_focus: 'none',
    TextInput_borderColor_hover: 'none',
    TextInput_fontSize: '12px',
    TextInput_height_small: '24px',
    TextInput_height_medium: '30px',
    TextInput_height_large: '36px',
    TextInput_height_jumbo: '42px',
    TextInput_paddingHorizontal: '10px',

    // Typography Themes
    fontFamily: 'Proxima Nova',
    fontFamily_alt: 'Proxima Nova Semi Bold'
  }
});
