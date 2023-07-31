import styled from 'styled-components';

export const S = {
  Card: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    padding: 36px 40px 57px 40px;
  `,
  GalleryLayout: styled.div`
    display: flex;
    flex-direction: column;
    width: 334px;
    height: 100%;
    padding-right: 20px;
  `,
  AsideLayout: styled.div`
    display: flex;
    flex-direction: column;
    width: 334px;
    height: 100%;
  `,
  Header: styled.div`
    display: flex;

    .back {
      margin-left: auto;
      margin-top: 11px;
      cursor: pointer;
    }
  `,
  Breadcrumbs: styled.div`
    display: flex;
    width: 100%;
    margin-top: 6px;
    margin-bottom: 32px;
  `,
  HeaderContent: styled.span`
    display: flex;
    flex-direction: column;
  `,
  HeaderTitle: styled.span`
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    font-family: Inter;
    margin-bottom: 5px;
  `,
  HeaderPrice: styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  `,
  Sizes: styled.div`
    margin-top: 35px;
    padding-right: 18px;
  `,
  Buttons: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 32px;
  `,
  GalleryContainer: styled.div`
      margin-top: 32px;
      width: 100%;
    `,
  Description: styled.div`
      width: 100%;
      margin-top: 35px;
      line-height: 23px;
      margin-bottom: 30px;
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
