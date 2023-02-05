import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonStory } from '@/shared/ui/button/button.stories';
import { AddToCartButtonStory } from '@/shared/ui/add-to-cart-button/add-to-cart-button.stories';
import { SizesStory } from '@/shared/ui/sizes/sizes.stories';
import { DropdownStory } from '@/shared/ui/dropdown/dropdown.stories';
import { GalleryStories } from '@/shared/ui/gallery/gallery.stories';
import { BreadcrumbsStories } from '@/shared/ui/breadcrumbs/breadcrumbs.stories';
import { ProductCardStories } from '@/shared/ui/product-card/product-card.stories';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const decorate =
  (Component: FC): FC =>
  () =>
    (
      <Wrapper>
        <Component />
      </Wrapper>
    );

export const stories = {
  ButtonStory: decorate(ButtonStory),
  AddToCartButtonStory: decorate(AddToCartButtonStory),
  SizesStory: decorate(SizesStory),
  DropdownStory: decorate(DropdownStory),
  GalleryStories: decorate(GalleryStories),
  BreadcrumbsStories: decorate(BreadcrumbsStories),
  ProductCardStories,
};
