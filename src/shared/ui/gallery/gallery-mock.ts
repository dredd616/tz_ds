import { useMemo } from 'react';
import { useMediaSizes } from '@/shared/theme';

const mobileItems = Array.from({ length: 6 }, (_, i) => ({
  original: '/images/original-320.png',
  thumbnail: '/images/thumbnail.png',
  key: i.toString(),
}));

const tabletItems = Array.from({ length: 6 }, (_, i) => ({
  original: '/images/original-768.png',
  thumbnail: '/images/thumbnail.png',
  key: i.toString(),
}));

const desktopItems = Array.from({ length: 6 }, (_, i) => ({
  original: '/images/original-1440.png',
  thumbnail: '/images/thumbnail.png',
  key: i.toString(),
}));

export const useGalleryItems = () => {
  const isMobile = useMediaSizes((theme) => theme.under('sm'));
  const isTablet = useMediaSizes((theme) => theme.between(['sm', 'md']));

  const items = useMemo(() => {
    if (isMobile) return mobileItems;
    if (isTablet) return tabletItems;
    return desktopItems;
  }, [isTablet, isMobile]);

  return items;
};
