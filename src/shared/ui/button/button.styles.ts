import styled from 'styled-components';
import { THEME } from '@/shared/theme';

export const S = {
  Button: styled.button<{ $hasAdornment?: boolean }>`
    ${({ $hasAdornment }) => !$hasAdornment && 'justify-content: center'};
    display: flex;
    align-items: center;
    width: 100%;
    background: #000;
    height: 40px;
    border: none;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 10px 11px 11px 15px;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: #111;
    }

    &:active:not(:disabled) {
      background: #222;
    }

    &:disabled {
      pointer-events: none;
      background: #525252;
      color: #b2b2b2;
      user-select: none;
    }

    ${THEME.breakpoints.up('sm')} {
      height: 50px;
      font-size: 16px;
      font-weight: 500;
      padding: 14px 16px 15px 20px;
    }

    .button__end-adornment {
      ${({ $hasAdornment }) => $hasAdornment && 'margin-left: auto'};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};
