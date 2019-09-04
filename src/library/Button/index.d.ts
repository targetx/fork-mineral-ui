import { ElementType, ReactElement, ReactNode, SyntheticEvent } from 'react';

type Size = 'small' | 'medium' | 'large' | 'jumbo';
type Variant = 'danger' | 'grayscale' | 'success' | 'warning';

export declare namespace Button {
  export interface Props {
    as?: ElementType;
    children?: ReactNode;
    circular?: boolean;
    css?: { [key: string]: any };
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    iconEnd?: ReactElement;
    iconStart?: ReactElement;
    justifyContent?: string;
    minimal?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    primary?: boolean;
    size?: Size;
    type?: string;
    variant?: Variant;
    width?: string;
  }
}

export declare function Button(props: Button.Props): ReactElement;
export default Button;
