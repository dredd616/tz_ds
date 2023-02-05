import { TBreadcrumbItem, TGalleryItem, TSize } from '@/shared/ui';
import { ReactElement, ReactNode } from 'react';

export type TProductCard = {
  images: TGalleryItem[];
  sizes: Array<TSize & { label: string }>;
  breadcrumbs: TBreadcrumbItem[];
  title: string;
  price: string;
  description: ReactNode;
  icons: Array<ReactElement>;
};

export type TProductResponsiveCard = TProductCard & {
  isLiked: boolean;
  setIsLiked: (value: boolean) => void;
  size: string;
  setSize: (value: string) => void;
  sizesOptions: TProductCard['sizes'];
};
