import { css } from 'styled-components'

const defaultBreakPoint = 768

export const getBorderStyle = (color) => ({ borderLeft: `7px solid ${color}` })

/**
 * Return required style value based on value type
 * @param {String|Number} value
 * @returns {String}
 */
export const parseStyleValue = (value: string | number): string => {
  const v = value.toString()
  if (v.includes('%', 'px', 'em', 'rem') || v === 'auto') {
    return v
  }
  return `${v}px`
}

export const breakpointStyle = ({ breakpoint, content }) => css`
  @media only screen ${(breakpoint && breakpoint.value) ||
    (defaultBreakPoint &&
      `and (max-width: ${
        (breakpoint && breakpoint.value) || defaultBreakPoint
      }px)`)} {
    ${content};
  }
`

export const reverseBreakpointStyle = ({ breakpoint, content }) => css`
  @media only screen ${(breakpoint && breakpoint.value) ||
    (defaultBreakPoint &&
      `and (min-width: ${
        (breakpoint && breakpoint.value) || defaultBreakPoint
      }px)`)} {
    ${content};
  }
`

export const edgeStyle = (
  kind: string,
  data:
    | string
    | number
    | {
        horizontal?: string | number,
        vertical?: string | number,
        right?: string | number,
        left?: string | number,
        top?: string | number,
        bottom?: string | number
      },
  responsiveBreakpoint: {
    horizontal?: string | number,
    vertical?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
    value: number,
    data: string
  }
) => {
  if (typeof data === 'string' || typeof data === 'number') {
    const parsedData = parseStyleValue(data)
    return css`
      ${kind}: ${parsedData};
      ${responsiveBreakpoint
        ? breakpointStyle({
            breakpoint: responsiveBreakpoint,
            content: `${kind}:${parseStyleValue(responsiveBreakpoint)};`
          })
        : ''}
    `
  }
  const results = []
  if (data.horizontal) {
    const value = parseStyleValue(data.horizontal)

    results.push(css`
      ${kind}-left:${value};
      ${kind}-right:${value};
    `)
  }

  if (data.vertical) {
    const value = parseStyleValue(data.vertical)

    results.push(css`
      ${kind}-top:${value};
      ${kind}-bottom:${value};
    `)
  }

  if (data.top) {
    const value = parseStyleValue(data.top)

    results.push(css`
      ${kind}-top:${value};
    `)
  }
  if (data.bottom) {
    const value = parseStyleValue(data.bottom)

    results.push(css`
      ${kind}-bottom:${value};
    `)
  }

  if (data.right) {
    const value = parseStyleValue(data.right)

    results.push(css`
      ${kind}-right:${value};
    `)
  }
  if (data.left) {
    const value = parseStyleValue(data.left)

    results.push(css`
      ${kind}-left:${value};
    `)
  }

  if (data.mobile) {
    const { mobile } = data
    if (typeof mobile === 'string' || typeof mobile === 'number') {
      results.push(
        breakpointStyle({
          breakpoint: responsiveBreakpoint,
          content: css`
            ${kind}:${parseStyleValue(mobile)};
          `
        })
      )
    }

    if (mobile.horizontal) {
      results.push(
        breakpointStyle({
          breakpoint: responsiveBreakpoint,
          content: css`
            ${kind}-left:${parseStyleValue(mobile.horizontal)};
            ${kind}-right:${parseStyleValue(mobile.horizontal)};
          `
        })
      )
    }
    if (mobile.vertical) {
      results.push(
        breakpointStyle({
          breakpoint: responsiveBreakpoint,
          content: css`
            ${kind}-top:${parseStyleValue(mobile.vertical)};
            ${kind}-bottom:${parseStyleValue(mobile.vertical)};
          `
        })
      )
    }
    if (mobile.top) {
      results.push(
        breakpointStyle({
          breakpoint: responsiveBreakpoint,
          content: css`
            ${kind}-top:${parseStyleValue(mobile.top)};
          `
        })
      )
    }
    if (mobile.bottom) {
      results.push(
        breakpointStyle({
          breakpoint: responsiveBreakpoint,
          content: css`
            ${kind}-bottom:${parseStyleValue(mobile.bottom)};
          `
        })
      )
    }
    if (mobile.right) {
      results.push(
        breakpointStyle({
          breakpoint: responsiveBreakpoint,
          content: css`
            ${kind}-right:${parseStyleValue(mobile.right)};
          `
        })
      )
    }
    if (mobile.left) {
      results.push(
        breakpointStyle({
          breakpoint: responsiveBreakpoint,
          content: css`
            ${kind}-left:${parseStyleValue(mobile.left)};
          `
        })
      )
    }
  }

  return results
}

export type EdgeType =
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

window.edgeStyle = edgeStyle
