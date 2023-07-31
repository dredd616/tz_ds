import React, { FC } from 'react';
import { AddToCartButton, Dropdown, Gallery, Sizes } from '@/shared/ui';
import { ReactComponent as BackIcon } from '@/assets/icons/back-button.svg';
import { ProductAttributes } from '../../../product-attributes';
import { TProductResponsiveCard } from '../../types';
import { S } from './product-card-mobile.styles';

export const ProductCardMobile: FC<
  Omit<TProductResponsiveCard, 'breadcrumbs'>
> = ({
  isLiked,
  setIsLiked,
  size,
  setSize,
  sizesOptions,
  icons,
  description,
  images,
  price,
  sizes,
  title,
}) => (
  <S.Card>
    <S.Header>
      <S.HeaderContent>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderPrice>{price} руб.</S.HeaderPrice>
      </S.HeaderContent>
      <BackIcon className="back" />
    </S.Header>
    <S.Sizes>
      <Sizes items={sizes} />
    </S.Sizes>
    <S.Buttons>
      <Dropdown options={sizesOptions} value={size} onChange={setSize} />
      <AddToCartButton
        onLikeClick={() => setIsLiked(!isLiked)}
        liked={isLiked}
      />
    </S.Buttons>
    <S.GalleryContainer>
      <Gallery items={images} />
    </S.GalleryContainer>
    <S.Description>{description}</S.Description>
    <S.Icons>
      <ProductAttributes attributes={icons} />
    </S.Icons>
  </S.Card>
);
