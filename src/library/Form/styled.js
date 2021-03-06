/* @flow */
import styled from '@emotion/styled';
import { hideVisually } from 'polished';
import { componentStyleReset, getNormalizedValue } from '../styles';
import {
  formFieldDividerTheme,
  formFieldsetTheme,
  formFieldTheme
} from './themes';

import type { StyledComponent } from '@emotion/styled-base/src/utils';

export const FormFieldRoot: StyledComponent<{ [key: string]: any }> = styled(
  'div'
)(
  ({
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    marginBottom,
    marginTop,
    marginVertical,
    width,
    theme
  }) => {
    return {
      ...componentStyleReset(theme),
      /* TargetX Custom Styles */
      ...(border && { border }),
      ...(borderBottom && { borderBottom }),
      ...(borderLeft && { borderLeft }),
      ...(borderRight && { borderRight }),
      ...(borderTop && { borderTop }),
      ...(marginBottom && { marginBottom }),
      ...(marginTop && { marginTop }),
      ...(marginVertical && {
        marginBottom: marginVertical,
        marginTop: marginVertical
      }),
      ...(width && { width })
    };
  }
);

export const FormFieldCaption: StyledComponent<{ [key: string]: any }> = styled(
  'div'
)(({ isGroup, theme: baseTheme, variant }) => {
  let theme = formFieldTheme(baseTheme);
  if (variant) {
    // prettier-ignore
    theme = {
      ...theme,
      FormFieldCaption_color: baseTheme[`color_${variant}`]
    };
  }

  const fontSize = theme.FormFieldCaption_fontSize;

  return {
    color: theme.FormFieldCaption_color,
    fontSize,
    marginTop: isGroup
      ? getNormalizedValue(theme.FormFieldCaption_marginTop_isGroup, fontSize)
      : getNormalizedValue(theme.FormFieldCaption_marginTop, fontSize)
  };
});

export const FormFieldDividerRoot: StyledComponent<{
  [key: string]: any
}> = styled('div')(
  ({ color, marginBottom, marginTop, marginVertical, theme: baseTheme }) => {
    const theme = formFieldDividerTheme(baseTheme);

    return {
      backgroundColor: color || theme.FormFieldDivider_borderColor,
      height: theme.FormFieldDivider_borderWidth,
      margin: `${theme.FormFieldDivider_margin} 0`,
      /* TargetX Custom Styles */
      ...(marginBottom && { marginBottom }),
      ...(marginTop && { marginTop }),
      ...(marginVertical && {
        marginBottom: marginVertical,
        marginTop: marginVertical
      })
    };
  }
);

export const FormFieldSecondaryText: StyledComponent<{
  [key: string]: any
}> = styled('span')(({ secondaryText, theme: baseTheme }) => {
  const theme = formFieldTheme(baseTheme);

  return {
    color: secondaryText
      ? theme.FormFieldSecondaryText_color
      : theme.FormFieldSecondaryText_color_required,
    fontSize: theme.FormFieldSecondaryText_fontSize,
    fontWeight: theme.FormFieldSecondaryText_fontWeight,
    padding: '1px'
  };
});

export const FormFieldsetRoot: StyledComponent<{ [key: string]: any }> = styled(
  'fieldset'
)(({ disabled, theme: baseTheme }) => {
  const theme = formFieldsetTheme(baseTheme);

  return {
    ...componentStyleReset(baseTheme),

    border: '1px solid transparent',
    borderTopColor: theme.FormFieldset_borderColor,
    padding: 0,

    '& > legend': {
      color: disabled ? theme.color_disabled : theme.FormFieldsetLegend_color,
      fontSize: theme.FormFieldsetLegend_fontSize,
      fontWeight: theme.FormFieldsetLegend_fontWeight,
      lineHeight: theme.size_medium,
      padding: 0,
      paddingLeft: theme.direction === 'rtl' ? theme.space_inline_sm : null,
      paddingRight: theme.direction === 'ltr' ? theme.space_inline_sm : null
    }
  };
});

export const FormFieldTextWrapper: StyledComponent<{
  [key: string]: any
}> = styled('div')(({ hideLabel, theme: baseTheme }) => {
  const theme = formFieldTheme(baseTheme);

  return {
    color: theme.FormFieldLabel_color,
    display: 'flex',
    fontSize: theme.FormFieldLabel_fontSize,
    fontWeight: theme.FormFieldLabel_fontWeight,
    justifyContent: 'space-between',
    marginBottom: theme.FormFieldLabel_marginBottom,
    ...(hideLabel ? hideVisually() : {}),
    '& > *:not(style)': {
      alignSelf: 'flex-end',
      display: 'inline-block'
    },

    /* TargetX Custom Styles */
    fontFamily: theme.FormFieldLabel_fontFamily
  };
});
