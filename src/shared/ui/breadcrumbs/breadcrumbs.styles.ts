import styled from 'styled-components';

export const S = {
  Breadcrumbs: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b3b3b3;

    .home {
      margin-right: 19px;
      cursor: pointer;
    }

    .arrow {
      margin-right: 16px;
    }
  `,
  BreadcrumbItem: styled.div`
    margin-top: 2px;
    margin-right: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  `,
};
