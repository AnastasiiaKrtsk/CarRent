import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

export const ContainerModal = styled.div`
  position: relative;
  width: 550px;
  height: 650px;
  padding: 20px;
  border-radius: 24px;
  background: #d9d9d9;
`;
export const ImgWrapperModal = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto 10px;
  overflow: hidden;
  border-radius: 14px;
`;
export const ImgModal = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 225px;
  object-fit: cover;

  background: #f3f3f2;
`;

export const TitleModal = styled.h2`
  color: #202123;
  font-size: 18px;
  font-style: normal;
  font-weight: medium;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const ModalTitleGold = styled.span`
  color: #bf8f00;
`;

export const ModalFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 14px; */
`;

export const ModalContentDiv = styled.div``;
export const ModalText = styled.div``;
export const Text = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  padding: 0;
`;
export const ModalMainText = styled.p`
  margin-top: 14px;
  margin-bottom: 0;
  color: #202123;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
`;
export const ConditionTextWrapper = styled.div`
  display: flex;
  padding: 7px 0;

  align-items: center;
  gap: 8px;
`;
export const ModalConditionWrapper = styled.p`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: -0.24px;
  padding: 7px 14px;

  border-radius: 35px;
  background: #f9f9f9;
`;
export const Number = styled.span`
  color: #bf8f00;
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  border-radius: 12px;
  border: none;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;

  background-color: #202123;
  color: #bf8f00;
  transition: all 0.3s ease;

  &:hover {
    background-color: #bf8f00;
    color: #202123;
  }
`;
export const CloseBtnModal = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 28px;
  top: 28px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: #202123;
    stroke: #bf8f00;
  }
`;

export const SvgModal = styled.svg`
  stroke: #bf8f00;
`;
