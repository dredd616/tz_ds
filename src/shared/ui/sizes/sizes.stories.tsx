import { useMemo } from 'react';
import { useCheckboxControl } from 'storybox-react';
import { Sizes } from './sizes';

const SIZES = new Map([
  ['XS', { value: 'XS', outOfStock: true }],
  ['S', { value: 'S', outOfStock: false }],
  ['M', { value: 'M', outOfStock: false }],
  ['XL', { value: 'M', outOfStock: false }],
  ['L', { value: 'L', outOfStock: true }],
]);

const sizesOptions = ['S', 'M', 'XS', 'XL', 'L'];
const defaultSizesOptions = ['S', 'M', 'XS'];
export const SizesStory = () => {
  const [availableSizes] = useCheckboxControl({
    name: 'sizes',
    options: sizesOptions,
    defaultValue: defaultSizesOptions,
  });

  const sizes = useMemo(
    () =>
      availableSizes.map((size) => SIZES.get(size)).filter(Boolean) as Array<{
        value: string;
        outOfStock: boolean;
      }>,
    [availableSizes],
  );

  return <Sizes items={sizes} />;
};
