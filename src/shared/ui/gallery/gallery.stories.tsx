import React from 'react';
import { Gallery } from './gallery';
import { useGalleryItems } from './gallery-mock';

export const GalleryStories = () => {
  const items = useGalleryItems();

  return <Gallery items={items} />;
};
