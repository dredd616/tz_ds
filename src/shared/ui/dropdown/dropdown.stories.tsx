import { useEffect, useMemo, useState } from 'react';
import { useCheckboxControl } from 'storybox-react';
import { Dropdown } from './dropdown';

const options = ['S', 'M', 'XS', 'XL', 'L'];
const defaultOptions = ['S', 'M', 'XS'];

const OPTIONS = new Map([
  ['XS', { value: 'XS', label: 'РАЗМЕР: XS' }],
  ['S', { value: 'S', label: 'РАЗМЕР: S' }],
  ['M', { value: 'M', label: 'РАЗМЕР: M' }],
  ['XL', { value: 'M', label: 'РАЗМЕР: XL' }],
  ['L', { value: 'L', label: 'РАЗМЕР: L' }],
]);

export const DropdownStory = () => {
  const [value, setValue] = useState(defaultOptions[0]);
  const [availableOptions] = useCheckboxControl({
    name: 'sizes',
    options,
    defaultValue: defaultOptions,
  });

  const actualOptions = useMemo(
    () =>
      availableOptions
        .map((size) => OPTIONS.get(size))
        .filter(Boolean) as Array<{
        value: string;
        label: string;
      }>,
    [availableOptions],
  );

  useEffect(() => {
    setValue(availableOptions[0]);
  }, [availableOptions]);

  return <Dropdown options={actualOptions} value={value} onChange={setValue} />;
};
