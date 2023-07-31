export type Breakpoints = {
  md: number;
  sm: number;
};

export type BreakpointName = keyof Breakpoints;

export type BreakpointsConfig = {
  values: Breakpoints;
  up: (breakpoint: BreakpointName) => string;
  under: (breakpoint: BreakpointName) => string;
  between: ([from, to]: [BreakpointName, BreakpointName]) => string;
};

export type Theme = {
  breakpoints: BreakpointsConfig;
};

export const THEME: Theme = {
  breakpoints: {
    values: {
      md: 1440,
      sm: 768,
    },
    up(breakpoint) {
      return `@media (min-width: ${this.values[breakpoint]}px)`;
    },
    under(breakpoint) {
      return `@media (max-width: ${this.values[breakpoint] - 1}px)`;
    },
    between([min, max]) {
      const from = this.values[min];
      const to = this.values[max] - 1;
      return `@media (min-width: ${from}px) and (max-width: ${to}px)`;
    },
  },
};
