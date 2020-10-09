import { Component, ReactElement, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  bottom?: string;
  clickable?: boolean;
  css?: { [key: string]: any };
  cursor?: string;
  left?: string;
  margin?: number | string;
  marginBottom?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  position?: string;
  right?: string;
  top?: string;
  size?: number | string;
  verticalAlign?: string;
}

export function Icon(
  props: IconProps
): ReactElement<
  any,
  | string
  | ((
      props: any
    ) => ReactElement<
      any,
      string | any | (new (props: any) => Component<any, any, any>)
    > | null)
  | (new (props: any) => Component<any, any, any>)
>;

export default Icon;
