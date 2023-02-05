import React from 'react';
import { ProductCard } from '@/shared/ui';
import { useGalleryItems } from '@/shared/ui/gallery/gallery-mock';
import { ReactComponent as Product1 } from '@/assets/icons/product/icon-1.svg';
import { ReactComponent as Product2 } from '@/assets/icons/product/icon-2.svg';
import { ReactComponent as Product3 } from '@/assets/icons/product/icon-3.svg';
import { separateThousands } from '@/shared/utils';

const sizes = [
  { value: 'XS', outOfStock: true, label: 'Размер: XS' },
  { value: 'S', outOfStock: false, label: 'Размер: S' },
  { value: 'M', outOfStock: false, label: 'Размер: M' },
];

const breadcrumbs = [{ label: 'Брюки' }];

const productIcons = [
  <Product1 key="1" />,
  <Product2 key="2" />,
  <Product3 key="3" />,
];

export const App = () => {
  const images = useGalleryItems();

  return (
    <ProductCard
      images={images}
      sizes={sizes}
      breadcrumbs={breadcrumbs}
      title="Пиджак CLASP"
      price={separateThousands(27000)}
      description={
        <>
          <p>
            Безупречный пиджак с мужского плеча, на шелковой подкладке с
            ассиметричным поясом, подчеркивающим талию. Прекрасно комбинируется
            с остальными изделиями из коллекции.
          </p>
          <p>
            Сочетайте с кожаным топом и брюками для рабочего дня в офисе, или же
            предайте образу дерзости, оставив его в расстегнутом виде.
          </p>
        </>
      }
      icons={productIcons}
    />
  );
};
