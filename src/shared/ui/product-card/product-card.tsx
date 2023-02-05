import React, { FC, useMemo, useState } from 'react';
import { useMediaSizes } from '@/shared/theme';
import { TProductCard } from './types';
import { ProductCardMobile } from './components/product-card-mobile/product-card-mobile';
import { ProductCardTablet } from './components/product-card-tablet/product-card-tablet';
import { ProductCardDesktop } from './components/product-card-desktop/product-card-desktop';

export const ProductCard: FC<TProductCard> = (props) => {
  const isMobile = useMediaSizes((theme) => theme.under('sm'));
  const isTablet = useMediaSizes((theme) => theme.between(['sm', 'md']));
  const isDesktop = useMediaSizes((theme) => theme.up('md'));

  const sizesOptions = useMemo(
    () => props.sizes.filter((item) => !item.outOfStock),
    [props.sizes],
  );

  const [size, setSize] = useState(sizesOptions[0].value);
  const [isLiked, setIsLiked] = useState(false);

  const additionalProps = {
    size,
    setSize,
    isLiked,
    setIsLiked,
    sizesOptions,
  };

  return (
    <>
      {isMobile && <ProductCardMobile {...additionalProps} {...props} />}
      {isTablet && <ProductCardTablet {...additionalProps} {...props} />}
      {isDesktop && <ProductCardDesktop {...additionalProps} {...props} />}
    </>
  );
};
