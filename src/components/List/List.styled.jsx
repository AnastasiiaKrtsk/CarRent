import styled from 'styled-components';
export const ListContainer = styled.div`
  padding: 15px;
  margin: 0;
`;

export const CarsListContainer = styled.ul`
  display: flex;
  /* max-width: 450px; */
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    /* max-width: 768px; */
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    max-width: 1280px;
    flex-basis: calc((100% - 60px) / 3);
    flex-wrap: wrap;
    gap: 44px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 60px;
    margin-bottom: 68px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
  gap: 29px;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
`;

export const ListItem = styled.div`
  padding: 0;
  margin: 0;
`;
