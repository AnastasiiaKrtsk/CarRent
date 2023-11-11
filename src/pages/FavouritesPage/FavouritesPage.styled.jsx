import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyleOverride = createGlobalStyle`
  body {
background: linear-gradient(to right,#302b21, #C6BB9E, #302b21), radial-gradient(circle, #C6BB9E, #5A5F62, #514225);
  }
`;
export const FavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;

export const FavTitle = styled.h4`
  // width: 1000px;
  margin-left: auto;
  margin-right: auto;
  font-size: 52px;
  font-weight: 700;
  margin-top: 120px;
  margin-bottom: 50px;
  color: #fff;
`;

export const FavImg = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
