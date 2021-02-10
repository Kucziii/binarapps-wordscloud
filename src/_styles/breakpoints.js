export const size = {
  xs: 320,
  sm: 375,
  md: 960, // previously it was 769
  lg: 1024,
  xl: 1200,
  xxl: 1600
};

export const breakpoint = {
  xs: `(min-width: ${size.xs}px)`,
  sm: `(min-width: ${size.sm}px)`,
  md: `(min-width: ${size.md}px)`,
  lg: `(min-width: ${size.lg}px)`,
  xl: `(min-width: ${size.xl}px)`,
  xxl: `(min-width: ${size.xxl}px)`
};

export const MOBILE_BREAKPOINT = size.md;
