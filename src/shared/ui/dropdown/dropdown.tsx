import React, { FC, useMemo, useRef } from 'react';
import { useOnClickOutside, useToggle } from '@/shared/hooks';
import { S } from './dropdown.styles';

export type TDropdown = {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
};

export const Dropdown: FC<TDropdown> = ({ options, value, onChange }) => {
  const [isOpen, toggleOpen, setFalseOpen] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, setFalseOpen);

  const label = useMemo(
    () => options.find((el) => el.value === value)?.label || '',
    [options, value],
  );

  return (
    <S.Dropdown onClick={toggleOpen} ref={ref}>
      <S.DropdownHeader $opened={isOpen}>
        {label}
        <S.DropdownIconArrow $isOpen={isOpen} />
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownContent>
          {options.map((option) => (
            <S.DropdownOption
              key={option.label}
              onClick={(event) => {
                event.stopPropagation();
                onChange(option.value);
                toggleOpen();
              }}
            >
              {option.label}
            </S.DropdownOption>
          ))}
        </S.DropdownContent>
      )}
    </S.Dropdown>
  );
};
