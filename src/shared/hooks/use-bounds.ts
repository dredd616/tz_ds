import { RefObject, useCallback, useEffect, useState } from 'react';
import { ResizeCallback, useResizeObserver } from './use-resize-observer';

export type Bounds = Omit<DOMRectReadOnly, 'toJSON'>;

const initial: Bounds = {
  width: 0,
  height: 0,
  right: 0,
  y: 0,
  x: 0,
  top: 0,
  left: 0,
  bottom: 0,
};

export const useBounds = (ref: RefObject<HTMLElement>) => {
  const [bounds, setBounds] = useState(initial);

  const handleResize: ResizeCallback = useCallback((entry) => {
    setBounds(entry.contentRect);
  }, []);

  useEffect(() => {
    if (ref.current) {
      setBounds(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  useResizeObserver(handleResize, ref);

  return bounds;
};
