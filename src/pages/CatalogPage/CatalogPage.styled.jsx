import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const MakeSelector = styled.select`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (min-width: 1280px) {
    padding: 8px;
    font-size: 16px;
  }
`;
export const ListContainer = styled.select`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
