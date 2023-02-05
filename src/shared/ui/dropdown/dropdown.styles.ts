import styled from 'styled-components';
import { ReactComponent as IconArrow } from '@/assets/icons/icon_arrow.svg';
import { THEME } from '@/shared/theme';

export const S = {
  Dropdown: styled.div`
    position: relative;
    width: 100%;
    color: #000;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    z-index: 3;

    ${THEME.breakpoints.up('sm')} {
      height: 50px;
      font-weight: 500;
      letter-spacing: 2px;
    }
  `,
  DropdownHeader: styled.div<{ $opened?: boolean }>`
    display: flex;
    align-items: center;
    height: 40px;
    background: ${({ $opened }) => ($opened ? '#fff' : '#eee')};
    padding: 13px 14px 10px 14px;
    cursor: pointer;
    
    border: 1px solid ${({ $opened }) => $opened ? '#000' : 'transparent'}};
    ${THEME.breakpoints.up('sm')} {
      height: 50px;
      padding: 14px 20px 15px 18px;
    }
  `,
  DropdownIconArrow: styled(IconArrow)<{ $isOpen: boolean }>`
    margin-left: auto;
    transform: rotate(${({ $isOpen }) => ($isOpen ? '0deg' : '-180deg')});
  `,
  DropdownContent: styled.div`
    width: 100%;
    z-index: 3;
  `,
  DropdownOption: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #fff;
    border: 1px solid #000;
    border-top: none;
    padding: 11px 16px 10px 15px;

    ${THEME.breakpoints.up('sm')} {
      height: 50px;
    }
  `,
};
