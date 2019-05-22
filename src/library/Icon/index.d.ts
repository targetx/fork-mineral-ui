import React, { SVGProps } from 'react';

export declare namespace Icon {
  interface Props extends SVGProps<SVGSVGElement> {
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
}

export declare const Icon: (
  props: Icon.Props
) => React.ReactElement<
  any,
  | string
  | ((
      props: any
    ) => React.ReactElement<
      any,
      string | any | (new (props: any) => React.Component<any, any, any>)
    > | null)
  | (new (props: any) => React.Component<any, any, any>)
>;
export default Icon;
