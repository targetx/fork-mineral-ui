import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  ReactElement
} from 'react';

export declare namespace Button {
  export interface Props
    extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
    as?: ElementType;
    circular?: boolean;
    css?: { [key: string]: any };
    fullWidth?: boolean;
    href?: string;
    htmlFor?: string;
    iconEnd?: ReactElement;
    iconStart?: ReactElement;
    justifyContent?: string;
    margin?: number | string;
    marginBottom?: number | string;
    marginHorizontal?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
    marginVertical?: number | string;
    minimal?: boolean;
    primary?: boolean;
    rel?: string;
    size?: string;
    target?: string;
    variant?: string;
    width?: string;
  }
}

export declare function Button(props: Button.Props): ReactElement;
export default Button;
