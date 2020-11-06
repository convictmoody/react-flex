import React from 'react'
import Flex from './styled'

/**
 * Flex Layout Properties
 * @type {{stretch: string, center: string, start: string, spaceAround: string, end: string, baseline: string, spaceBetween: string}}
 */
export const flexProps = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  stretch: 'stretch',
  baseline: 'baseline'
}

const BASIS_MAP = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
}

type EdgeType =
  | string
  | number
  | {
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
        vertical: string | number
      }
    }

export type FlexType = {
  align?: flexProps,
  justify?: flexProps,
  basis?: BASIS_MAP,
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
  loading?: boolean,
  childrenSpace?: number
}

const FlexBox = ({ loading, error, children, ...props }: FlexType) => {
  return (
    <>
      <Flex {...props} loading={loading || error}>
        {children}
      </Flex>
    </>
  )
}

/**
 * Flex Layout Direction
 * @type {{column: string, row: string}}
 */
export const flexDirection = {
  row: 'row',
  column: 'column',
  rowResponsive: 'row-responsive'
}

FlexBox.defaultProps = {
  align: flexProps.stretch,
  justify: flexProps.stretch,
  direction: 'row',
  f: null,
  pad: null,
  margin: null,
  full: null,
  pointer: false,
  width: null,
  height: null,
  maxWidth: null,
  secondary: false,
  floating: false,
  basis: null,
  mobileWidth: null,
  mobileHeight: null,
  mobileHidden: false,
  desktopHidden: false,
  visible: false,
  withShadow: false,
  backgroundColor: null,
  onTop: false,
  separator: null,
  noShrink: false,
  overflow: null,
  preventSelection: false,
  wrap: null,
  noRelative: false,
  loading: false,
  childrenSpace: null
}

export default FlexBox
