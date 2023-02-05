import { useEffect, useState } from 'react';
import { BreakpointsConfig, THEME } from './theme';

export type QueryInputFunction = (breakpoints: BreakpointsConfig) => string;

type QueryInput = QueryInputFunction | string;

const supportMatchMedia = typeof window.matchMedia !== 'undefined';

export const useMediaSizes = (queryInput: QueryInput) => {
  let query =
    typeof queryInput === 'function'
      ? queryInput(THEME.breakpoints)
      : queryInput;

  query = query.replace(/^@media( ?)/m, '');

  const matchMedia = supportMatchMedia ? window.matchMedia : null;

  const [match, setMatch] = useState(() => {
    if (matchMedia) {
      return matchMedia(query).matches;
    }

    return false;
  });

  useEffect(() => {
    if (!matchMedia) return undefined;

    let active = true;

    const queryList = matchMedia(query);
    const updateMatch = () => {
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addListener(updateMatch);

    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  });

  return match;
};
