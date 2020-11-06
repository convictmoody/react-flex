/**
 * Flex Layout Properties
 * @type {{stretch: string, center: string, start: string, spaceAround: string, end: string, baseline: string, spaceBetween: string}}
 */
export const flexProps: {
    stretch: string;
    center: string;
    start: string;
    spaceAround: string;
    end: string;
    baseline: string;
    spaceBetween: string;
};
export type FlexType = {
    align?: any;
    justify?: any;
    basis?: any;
    direction?: 'row' | 'column' | 'row-responsive';
    f?: number;
    pad?: EdgeType;
    margin?: EdgeType;
    full?: boolean | 'horizontal' | 'vertical' | 'both' | {
        vertical: boolean;
        horizontal: boolean;
    };
    pointer?: boolean;
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    secondary?: boolean;
    floating?: boolean;
    mobileWidth?: string | number;
    mobileHeight?: string | number;
    mobileHidden?: boolean;
    desktopHidden?: boolean;
    visible?: boolean;
    withShadow?: boolean;
    backgroundColor?: string;
    onTop?: boolean;
    preventSelection?: boolean;
    wrap?: boolean;
    separator?: {
        left?: boolean;
        right?: boolean;
        top?: boolean;
        bottom?: boolean;
    };
    noShrink?: boolean;
    overflow?: 'hidden' | 'scroll-y';
    noRelative?: boolean;
    childrenSpace?: number;
};
/**
 * Flex Layout Direction
 * @type {{column: string, row: string}}
 */
export const flexDirection: {
    column: string;
    row: string;
};
export default FlexBox;
type EdgeType = string | number | {
    top: string | number;
    bottom: string | number;
    right: string | number;
    left: string | number;
    horizontal: string | number;
    vertical: string | number;
    mobile: {
        top: string | number;
        bottom: string | number;
        right: string | number;
        left: string | number;
        horizontal: string | number;
        vertical: string | number;
    };
};
declare function FlexBox({ children, ...props }: FlexType): any;
declare namespace FlexBox {
    namespace defaultProps {
        import align = stretch;
        export { align };
        import justify = stretch;
        export { justify };
        export const direction: string;
        export const f: any;
        export const pad: any;
        export const margin: any;
        export const full: any;
        export const pointer: boolean;
        export const width: any;
        export const height: any;
        export const maxWidth: any;
        export const secondary: boolean;
        export const floating: boolean;
        export const basis: any;
        export const mobileWidth: any;
        export const mobileHeight: any;
        export const mobileHidden: boolean;
        export const desktopHidden: boolean;
        export const visible: boolean;
        export const withShadow: boolean;
        export const backgroundColor: any;
        export const onTop: boolean;
        export const separator: any;
        export const noShrink: boolean;
        export const overflow: any;
        export const preventSelection: boolean;
        export const wrap: any;
        export const noRelative: boolean;
        export const childrenSpace: any;
    }
}
