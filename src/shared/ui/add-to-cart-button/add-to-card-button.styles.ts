import styled from 'styled-components';
import { THEME } from '@/shared/theme';

export const S = {
  ButtonContainer: styled.div`
    display: flex;
    width: 100%;
  `,
  Heart: styled.div<{ $liked?: boolean }>`
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 15px;
      height: 14px;
      margin-bottom: -1px;

      path[id='bg'] {
        transition: fill 250ms ease;
        fill: ${({ $liked }) => ($liked ? 'white' : 'black')};
      }
    }

    ${THEME.breakpoints.up('sm')} {
      svg {
        width: 18px;
        height: 17px;
      }
    }
  `,
  DesktopHeart: styled.button<{ $liked?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 25px;
    cursor: pointer;
    flex-shrink: 0;
    flex-wrap: nowrap;
    background: ${({ $liked }) => ($liked ? 'black' : '#eee')};
    padding: 1px 0 0 2px;

    &:disabled {
      pointer-events: none;
      background: #525252;
      color: #b2b2b2;
      user-select: none;
    }

    svg {
      width: 18px;
      height: 17px;

      path {
        fill: ${({ $liked }) => ($liked ? 'white' : 'black')};
      }
    }
  `,
};
