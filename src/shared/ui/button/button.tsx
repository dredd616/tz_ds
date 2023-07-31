import React, { FC, ReactNode } from 'react';
import { S } from './button.styles';

export type TButton = { endAdornment?: ReactNode } & Omit<
  JSX.IntrinsicElements['button'],
  'ref'
>;

export const Button: FC<TButton> = ({ endAdornment, children, ...rest }) => (
  <S.Button $hasAdornment={Boolean(endAdornment)} {...rest}>
    <div className="button__children">{children}</div>
    {endAdornment && (
      <div className="button__end-adornment">{endAdornment}</div>
    )}
  </S.Button>
);
