import styled from 'styled-components';

export const S = {
  Card: styled.div`
    display: flex;
    flex-direction: column;
    padding: 26px 20px 40px 20px;
  `,

  Header: styled.div`
    display: flex;

    .back {
      margin-left: auto;
      margin-right: 9px;
      margin-top: 4px;
      cursor: pointer;
    }
  `,
  HeaderContent: styled.span`
    display: flex;
    flex-direction: column;
  `,
  HeaderTitle: styled.span`
    font-weight: 700;
    font-size: 20px;
    font-family: Inter;
    margin-bottom: 7px;
  `,
  HeaderPrice: styled.span`
    font-weight: 400;
    font-size: 16px;
  `,
  Sizes: styled.div`
    margin-top: 21px;
  `,
  Buttons: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 29px;
  `,
  GalleryContainer: styled.div`
    margin-top: 32px;
    width: 100%;
  `,
  Description: styled.div`
    width: 100%;
    margin-top: 34px;
    line-height: 23px;
    margin-bottom: 28px;
    font-weight: 400;

    p:not(:last-child) {
      margin: 0 0 23px;
    }

    p:last-child {
      margin: 0;
    }
  `,
  Icons: styled.div`
    display: flex;
  `,
};
