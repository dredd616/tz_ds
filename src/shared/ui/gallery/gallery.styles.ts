import styled from 'styled-components';
import { THEME } from '@/shared/theme';

export const S = {
  Gallery: styled.div`
    width: 100%;
    overflow: hidden;
  `,
  MainImageContainer: styled.div<{ $offset: number }>`
    width: 100%;
    display: flex;
    align-content: center;
    transition: transform 0.3s ease;
    transform: translateX(${({ $offset }) => $offset}px);
  `,
  MainImage: styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 400px;
    flex: 0 0 100%;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    ${THEME.breakpoints.up('sm')} {
      min-height: 449px;
    }

    ${THEME.breakpoints.up('md')} {
      min-height: 566px;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }
  `,
  ThumbnailsContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 15px;
  `,
  Thumbnail: styled.div`
    width: 67px;
    height: 67px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #f2f2f2;
    border: 2px solid #f2f2f2;

    img {
      max-height: 100%;
      max-width: 100%;
    }
    
    &[data-active='true'] {
      border-color: #000;
    }
  `,
  BulletsContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 28px;
    gap: 20px;
  `,
  Bullet: styled.div<{ $active: boolean }>`
    flex: 0 0 4px;
    cursor: pointer;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? '#000' : '#aaa')};
  `,
};
