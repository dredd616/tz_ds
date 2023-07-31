import React, { FC } from 'react';
import {
  AddToCartButton,
  Breadcrumbs,
  Dropdown,
  Gallery,
  Sizes,
} from '@/shared/ui';
import { ReactComponent as BackIcon } from '@/assets/icons/back-button.svg';
import { ProductAttributes } from '../../../product-attributes';
import { TProductResponsiveCard } from '../../types';
import { S } from './product-card-desktop.styles';

export const ProductCardDesktop: FC<TProductResponsiveCard> = ({
  isLiked,
  setIsLiked,
  size,
  setSize,
  sizesOptions,
  breadcrumbs,
  icons,
  description,
  images,
  price,
  sizes,
  title,
}) => (
  <S.Card>
    <S.GalleryLayout>
      <S.GalleryAsideLayout>
        <S.Breadcrumbs>
          <Breadcrumbs items={breadcrumbs} />
        </S.Breadcrumbs>
        <S.Icons>
          <ProductAttributes attributes={icons} />
        </S.Icons>
      </S.GalleryAsideLayout>
      <S.GalleryContainer>
        <Gallery items={images} />
      </S.GalleryContainer>
    </S.GalleryLayout>
    <S.AsideLayoutLayout>
      <S.Header>
        <S.HeaderContent>
          <S.HeaderTitle>{title}</S.HeaderTitle>
          <S.HeaderPrice>{price} руб.</S.HeaderPrice>
        </S.HeaderContent>
        <BackIcon className="back" />
      </S.Header>
      <S.Buttons>
        <S.DropdownContainer>
          <Dropdown options={sizesOptions} value={size} onChange={setSize} />
        </S.DropdownContainer>
        <S.AddToCartButtonContainer>
          <AddToCartButton
            onLikeClick={() => setIsLiked(!isLiked)}
            liked={isLiked}
          />
        </S.AddToCartButtonContainer>
      </S.Buttons>
      <S.Sizes>
        <Sizes items={sizes} />
      </S.Sizes>
      <S.Description>{description}</S.Description>
    </S.AsideLayoutLayout>
  </S.Card>
);
