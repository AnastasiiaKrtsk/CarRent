import { styled } from 'styled-components';

export const Loadmore = styled.button`
  width: 200px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  border-radius: 12px;
  background-color: #bf8f00;
  color: #202123;
  border: none;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 50px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #202123;
    color: #bf8f00;
  }
`;
export const LoadWrapper = styled.button`
  background-color: transparent;
  border: none;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
