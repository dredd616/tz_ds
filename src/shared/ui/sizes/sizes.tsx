import React, { FC } from 'react';
import { S } from './sizes.styles';

export type TSize = { value: string; outOfStock: boolean }

export type TSizes = {
  items: Array<TSize>;
};

export const Sizes: FC<TSizes> = ({ items }) => (
    <S.Wrapper>
      {items.map((item) => (
        <S.Item key={item.value} $outOfStock={item.outOfStock}>
          <span className="size">{item.value}</span>
        </S.Item>
      ))}
      <S.Text>Как выбрать размер?</S.Text>
    </S.Wrapper>
  );
