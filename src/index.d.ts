// TypeScript definitions for flexbox
// Project: https://github.com/convictmoody/flexbox

import * as React from 'react';

export as namespace Flexbox;

declare namespace Flexbox {
  type AlignContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch';

  type AlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

  type Elements = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section';

  type FlexDisplays = 'flex' | 'inline-flex';

  type FlexWraps = 'nowrap' | 'wrap-reverse' | 'wrap';

  type JustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';

  type FlexProps = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'baseline'
  type EdgeType = string | number | {
    top: string | number,
    bottom: string | number,
    right: string | number,
    left: string | number,
    horizontal: string | number,
    vertical: string | number,
    mobile: {
      top: string | number,
      bottom: string | number,
      right: string | number,
      left: string | number,
      horizontal: string | number,
      vertical: string | number,
      [field: string]: any
    },
    [field: string]: any
  };

  type FlexDirections = "row" | "column" | "row-responsive"
  // <Flexbox />
  interface FlexboxProps extends React.HTMLAttributes<HTMLElement> {
    align?: FlexProps,
    justify?: FlexProps,
    direction?: 'row' | 'column' | 'row-responsive',
    f?: number,
    pad?: EdgeType,
    margin?: EdgeType,
    full?:
    | boolean
    | 'horizontal'
    | 'vertical'
    | 'both'
    | {
      vertical: boolean,
      horizontal: boolean
    },
    pointer?: boolean,
    width?: number | string,
    height?: number | string,
    maxWidth?: number | string,
    secondary?: boolean,
    floating?: boolean,
    mobileWidth?: string | number,
    mobileHeight?: string | number,
    mobileHidden?: boolean,
    desktopHidden?: boolean,
    visible?: boolean,
    withShadow?: boolean,
    backgroundColor?: string,
    onTop?: boolean,
    preventSelection?: boolean,
    wrap?: boolean,
    separator?: {
      left?: boolean,
      right?: boolean,
      top?: boolean,
      bottom?: boolean
    },
    noShrink?: boolean,
    overflow?: 'hidden' | 'scroll-y',
    noRelative?: boolean,
    childrenSpace?: number
  }

  export class Flexbox extends React.Component<FlexboxProps, {}> { }
}

export default Flexbox.Flexbox;