import styled from 'styled-components';

export const StylesButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  text-decoration: none;
  font-weight: 600;
  background-color: #202123;
  color: #bf8f00;
  width: 150px;
  height: 45px;

  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #bf8f00;
    color: #202123;
  }
`;
