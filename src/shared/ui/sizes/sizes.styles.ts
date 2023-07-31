import styled, { css } from 'styled-components';
import { THEME } from '@/shared/theme';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
  `,
  Item: styled.div<{ $outOfStock?: boolean }>`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #eee;
    flex-shrink: 0;

    .size {
      z-index: 2;
      line-height: 18px;

      ${THEME.breakpoints.up('sm')} {
        font-size: 14px;
      }
    }

    ${THEME.breakpoints.up('sm')} {
      height: 41px;
      width: 41px;
    }

    ${({ $outOfStock }) =>
      $outOfStock &&
      css`
        background: transparent;
        border: 1px solid #eee;

        ${THEME.breakpoints.up('sm')} {
          height: 41px;
          width: 41px;
        }

        &:after {
          content: '';
          width: 1px;
          height: 30px;
          background: #eee;
          position: absolute;
          transform: rotate(-30deg);

          ${THEME.breakpoints.up('sm')} {
            height: 41px;
          }
        }
      `}
    &:not(:last-child) {
      margin-right: 6px;
    }
  `,
  Text: styled.div`
    font-size: 16px;
    line-height: 21px;
    margin-left: auto;
    margin-bottom: 2px;
    z-index: 1;
    cursor: pointer;
  `,
};
