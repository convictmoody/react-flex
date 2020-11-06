import styled, { css } from 'styled-components'
import { breakpointStyle, parseStyleValue, edgeStyle } from './util'

const ALIGN_MAP = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  stretch: 'stretch',
  baseline: 'baseline'
}

const alignStyle = css`
  align-items: ${({ align }) => ALIGN_MAP[align] || align};
`

const justifyStyle = css`
  justify-content: ${(props) => ALIGN_MAP[props.justify] || props.justify};
`

const flexStyle = css`
  flex: ${(props) => props.f};
`

const widthStyle = css`
  width: ${(props) => parseStyleValue(props.width)};
  min-width: ${(props) => parseStyleValue(props.width)};
  ${(props) =>
    props.mobileWidth
      ? breakpointStyle({
          content: `
        width: ${parseStyleValue(props.mobileWidth)};
        min-width: ${parseStyleValue(props.mobileWidth)};
      `
        })
      : ''}
`

const heightStyle = css`
  height: ${(props) => parseStyleValue(props.height)};
  min-height: ${(props) => parseStyleValue(props.height)};
  ${(props) =>
    props.mobileHeight
      ? breakpointStyle({
          content: `
        height: ${parseStyleValue(props.mobileHeight)};
        min-height: ${parseStyleValue(props.mobileHeight)};
      `
        })
      : ''}
`

const directionStyle = (direction: 'row' | 'column' | 'row-responsive') => {
  const returnStyles = [
    css`
      flex-direction: ${direction === 'row-responsive' ? 'row' : direction};
    `
  ]

  if (direction === 'row-responsive') {
    returnStyles.push(
      breakpointStyle({
        content: `
        flex-direction: column;
        flex-basis: auto;
        justify-content: flex-start;
        align-items: stretch;
        flex-shrink: 0;
      `
      })
    )
  }
  return returnStyles
}

const pointerStyle = css`
  cursor: pointer;
`

const visibilityStyle = (mobileHidden: boolean, visible: boolean) => {
  if (mobileHidden && visible) {
    return breakpointStyle({
      content: css`
        display: flex;
      `
    })
  }
  if (mobileHidden) {
    return breakpointStyle({
      content: css`
        display: none;
      `
    })
  }
  return ''
}

const desktopVisibilityStyle = (desktopHidden: boolean, visible: boolean) => {
  if (desktopHidden && visible) {
    return breakpointStyle({
      content: css`
        display: none;
      `
    })
  }
  if (desktopHidden) {
    return css`
      display: none;
      ${() =>
        breakpointStyle({
          content: css`
            display: flex;
          `
        })}
    `
  }
  return ''
}

const fullStyle = (
  full: boolean | 'both' | { vertical: boolean, horizontal: boolean },
  direction: 'column' | 'row' | 'row-responsive'
) => {
  const returnStyles = []
  if (typeof full === 'boolean') {
    if (direction === 'column')
      return css`
        height: 100%;
      `
    return css`
      width: 100%;
    `
  }

  if (full === 'both') {
    return css`
      width: 100%;
      height: 100%;
    `
  }

  if (full.vertical || full === 'vertical') {
    returnStyles.push(
      css`
        height: 100%;
      `
    )
  }
  if (full.horizontal || full === 'horizontal') {
    returnStyles.push(
      css`
        width: 100%;
      `
    )
  }

  return returnStyles
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

const basisStyle = css`
  flex-basis: ${(props) => BASIS_MAP[props.basis] || props.basis};
`

const secondaryStyle = css`
  background-color: white;
`

const withShadowStyle = css`
  box-shadow: 0 0 9px -3px rgba(0, 0, 0, 0.5);
`

const backgroundColorStyle = css`
  background-color: ${(props) => props.backgroundColor};
`

const onTopStyle = css`
  z-index: 10;
`

const generateBorder = (position) => {
  return css`
    border-${position}: 1px solid #979797;
  `
}

const separatorStyle = (location) => {
  const separators = []
  if (location.bottom) {
    separators.push(generateBorder('bottom'))
  }
  if (location.top) {
    separators.push(generateBorder('top'))
  }
  if (location.right) {
    separators.push(generateBorder('right'))
  }
  if (location.left) {
    separators.push(generateBorder('left'))
  }

  const style = css`
    ::before {
      content: '';
      position: absolute;
      width: 90%;
      align-self: center;
      flex: 1;
      height: 100%;
      ${separators};
    }
  `

  return style
}

const shrinkStyle = css`
  flex-shrink: ${(props) => (props.noShrink ? 0 : 1)};
`

const overFlowStyle = (props) => {
  const { overflow } = props
  if (overflow === 'hidden') {
    return css`
      overflow: hidden;
      ${breakpointStyle({
        content: css`
          overflow: scroll;
        `
      })}
    `
  }

  if (overflow === 'scroll-y') {
    return css`
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    `
  }
}

const maxWidthStyle = css`
  max-width: ${(props) => parseStyleValue(props.maxWidth)};
`

const preventSelectionStyle = css`
  user-select: none;
`

const wrapStyle = css`
  flex-wrap: ${(props) =>
    props.wrap
      ? props.wrap === 'reverse'
        ? 'wrap-reverse'
        : 'wrap'
      : 'nowrap'};
`

const blurStyle = css`
  filter: blur(10px);
  -webkit-filter: blur(10px);
`

const positionStyle = css`
  position: relative;
`

const injectChildrenStyle = css`
    > * {
       ${(props) =>
         props.direction === 'column'
           ? css`
               margin-bottom: ${props.childrenSpace}px;
             `
           : css`
               margin-right: ${props.childrenSpace}px;
             `};
    }
    
    > *:last-child{
       ${(props) =>
         props.direction === 'column'
           ? css`
               margin-bottom: 0;
             `
           : css`
               margin-right: 0;
             `}
`

/**
 * Flex Styled Component
 * @type {StyledComponent<"div", any, {}, never>}
 */
const StyledFlex = styled.div`
  display: flex;
  min-height: 0;
  ${(props) => !props.noRelative && positionStyle}
  ${(props) => props.align && alignStyle}
  ${(props) => props.justify && justifyStyle}
  ${(props) => props.f && flexStyle}
  ${(props) => props.direction && directionStyle(props.direction)}
  
  ${(props) => props.pad && edgeStyle('padding', props.pad, props.pad.mobile)}
  ${(props) =>
    props.margin && edgeStyle('margin', props.margin, props.margin.mobile)}
  ${(props) => props.pointer && pointerStyle}
  ${(props) => props.basis && basisStyle}
  ${(props) =>
    props.mobileHidden && visibilityStyle(props.mobileHidden, props.visible)}
  ${(props) =>
    props.desktopHidden &&
    desktopVisibilityStyle(props.desktopHidden, props.visible)}
  
  ${(props) => props.backgroundColor && backgroundColorStyle}
  ${(props) => props.onTop && onTopStyle}
  
  ${(props) => props.secondary && secondaryStyle}
  ${(props) => props.withShadow && withShadowStyle}
  ${(props) => props.noShrink && shrinkStyle}
  ${(props) => props.overflow && overFlowStyle}
  ${(props) => props.separator && separatorStyle(props.separator)}
  ${(props) => props.full && fullStyle(props.full, props.direction)}
  ${(props) => props.width && widthStyle}
  ${(props) => props.height && heightStyle}
  ${(props) => props.maxWidth && maxWidthStyle}
  ${(props) => props.preventSelection && preventSelectionStyle}
  ${(props) => props.wrap && wrapStyle}
  ${(props) => props.loading && blurStyle}
  ${(props) => props.childrenSpace && injectChildrenStyle}
  ${({ floating }) =>
    floating ? `box-shadow: 0px 10px 30px rgba(120,120,120,.4);` : null}
  
    transition: filter 400ms linear;
  -webkit-transition: -webkit-filter 400ms linear;
`

/**
 * @component
 */
export default StyledFlex
