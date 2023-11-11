import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: #000000;
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin-left: 15px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  padding: 10px;
  align-items: center;
  text-decoration: none;
  color: #d9d9d9;
`;

export const CarIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const ItemLink = styled(Link)`
  color: #e6f4f1;
  font-size: 20px;
  text-decoration: none;

  &:hover,
  :focus {
    color: #bf8f00;
  }
`;
