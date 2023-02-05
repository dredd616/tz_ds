import styled from 'styled-components';
import { THEME } from '@/shared/theme';

export const S = {
    ProductAttributes: styled.div`
      display: flex;
      

      ${THEME.breakpoints.up('md')} {
        flex-direction: column;
        
        svg {
          width: 110px;
          height: 110px;
        }
      }
    `
}