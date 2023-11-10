import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyleOverride = createGlobalStyle`
  body {
background: linear-gradient(to right,#302b21, #C6BB9E, #302b21), radial-gradient(circle, #C6BB9E, #5A5F62, #514225);


  }
`;
export const CarItemContainer = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #616161;
  border-radius: 14px;
  margin-left: auto;
  margin-right: auto;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    transition: all 0.3s ease;
  }
`;

export const SvgWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  position: relative;
`;

export const Heart = styled.svg`
  z-index: 9999999999;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 14px;
  right: 14px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;
export const Img = styled.img`
  position: relative;
  width: 274px;
  height: 268px;
  object-fit: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
export const AltText = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #d9d9d9;
  font-weight: bold;
  padding: 8px;
  box-sizing: border-box;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px 14px 0 0;
  overflow: hidden;
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 8px;
  height: 310px;
  width: 274px;
`;

export const CarTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarTitle = styled.h4`
  font-size: normal;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  color: #d9d9d9;
`;

export const CarTitleBlue = styled.span`
  color: #d9d9d9;
`;

export const CarBodyText = styled.div`
  width: 240px;
`;

export const CarText = styled.p`
  color: #d9d9d9;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CarButton = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  background: blue;
  border: none;
  border-radius: 0 0 14px 14px;
  color: #d9d9d9;
  cursor: pointer;
  transition: all 0.3s ease;

  text-decoration: none;
  font-weight: 600;
  background-color: #202123;
  color: #bf8f00;

  &:hover {
    background-color: #bf8f00;
    color: #202123;
  }
`;
