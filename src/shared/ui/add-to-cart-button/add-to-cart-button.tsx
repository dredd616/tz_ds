import React, { FC } from 'react';
import { useMediaSizes } from '@/shared/theme';
import { ReactComponent as IconHeart } from '@/assets/icons/icon_heart.svg';
import { Button, TButton } from '../button';
import { S } from './add-to-card-button.styles';

export type TAddToCartButton = {
  onLikeClick: () => void;
  liked: boolean;
} & Omit<TButton, 'endAdornment' | 'children'>;

export const AddToCartButton: FC<TAddToCartButton> = ({
  onLikeClick,
  disabled,
  liked,
  ...rest
}) => {
  const isMobile = useMediaSizes((theme) => theme.under('md'));

  return (
    <S.ButtonContainer>
      <Button
        disabled={disabled}
        endAdornment={
          isMobile && (
            <S.Heart
              $liked={liked}
              onClick={(event) => {
                event.stopPropagation();
                onLikeClick();
              }}
            >
              <IconHeart />
            </S.Heart>
          )
        }
        {...rest}
      >
        В корзину
      </Button>
      {!isMobile && (
        <S.DesktopHeart
          $liked={liked}
          onClick={onLikeClick}
          disabled={disabled}
        >
          <IconHeart />
        </S.DesktopHeart>
      )}
    </S.ButtonContainer>
  );
};
