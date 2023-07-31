import styled from 'styled-components';

export const S = {
  Card: styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 0 86px 100px 86px;
    gap: 37px;
  `,
  GalleryLayout: styled.div`
    display: flex;
    width: 615px;
    height: 100%;
  `,
  GalleryAsideLayout: styled.div`
    display: flex;
    flex-direction: column;
    width: 219px;
    height: 100%;
    padding: 98px 67px 50px 10px;
  `,
  AsideLayoutLayout: styled.div`
    display: flex;
    flex-direction: column;
    width: 615px;
    height: 100%;
    padding: 100px 0 0 88px;
  `,
  Breadcrumbs: styled.div`
    display: flex;
    width: 100%;
    margin: 6px 0 65px 6px;
  `,
  Header: styled.div`
    display: flex;

    .back {
      margin-left: auto;
      margin-right: 14px;
      margin-top: 10px;
      cursor: pointer;
    }
  `,
  HeaderContent: styled.span`
    display: flex;
    flex-direction: column;
  `,
  HeaderTitle: styled.span`
    font-weight: 700;
    font-size: 25px;
    font-family: Inter;
    margin-bottom: 5px;
  `,
  HeaderPrice: styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  `,
  Sizes: styled.div`
    margin-top: 33px;
    padding-right: 114px;
  `,
  Buttons: styled.div`
    width: 100%;
    display: flex;
    margin-top: 31px;
  `,
  DropdownContainer: styled.div`
    width: 233px;
  `,
  AddToCartButtonContainer: styled.div`
    width: 293px;
  `,
  GalleryContainer: styled.div`
      width: 100%;
    `,
  Description: styled.div`
      width: 100%;
      padding-right: 70px;
      margin-top: 44px;
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
      flex-direction: column;
      margin-left: 3px;
    `,
};
