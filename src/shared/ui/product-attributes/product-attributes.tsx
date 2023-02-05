import React, { FC } from 'react';
import { S } from './product-attributes.styles';

export type TProductAttributes = {
  attributes: JSX.Element[];
};
export const ProductAttributes: FC<TProductAttributes> = ({ attributes }) => (
  <S.ProductAttributes>{attributes}</S.ProductAttributes>
);
