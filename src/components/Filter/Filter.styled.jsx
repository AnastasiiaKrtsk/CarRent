import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 500px;
  height: 44px;

  overflow: hidden;
  margin-bottom: 60px;
  margin-top: 60px;
  border-radius: 24px;

  &:focus,
  &:hover {
  }
`;

export const Input = styled.input`
  width: 800px;
  padding-left: 20px;
  border: none;
  outline: none;
  border: 1px solid #fff;
  border-radius: 24px;
  height: 100%;

  font-size: 16px;
  line-height: 1.2;

  color: #000;
  background: #fff;
`;

export const SearchBtn = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'search',
})`
  position: absolute;
  top: 10px;
  right: 70px;
  color: #fff;
  font-size: 20px;
  font-weight: medium;
  line-height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: all 0.3s ease;

  svg:hover,
  svg:focus {
    fill: #fff;
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  right: 10px;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Cross = styled.svg`
  stroke: #000;
`;
