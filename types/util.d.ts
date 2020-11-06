export function getBorderStyle(color: any): {
    borderLeft: string;
};
export function parseStyleValue(value: string | number): string;
export function breakpointStyle({ breakpoint, content }: {
    breakpoint: any;
    content: any;
}): any;
export function reverseBreakpointStyle({ breakpoint, content }: {
    breakpoint: any;
    content: any;
}): any;
export function edgeStyle(kind: string, data: string | number | {
    horizontal?: string | number;
    vertical?: string | number;
    right?: string | number;
    left?: string | number;
    top?: string | number;
    bottom?: string | number;
}, responsiveBreakpoint: {
    horizontal?: string | number;
    vertical?: string | number;
    right?: string | number;
    left?: string | number;
    top?: string | number;
    bottom?: string | number;
    value: number;
    data: string;
}): any;
export type EdgeType = string | number | {
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
