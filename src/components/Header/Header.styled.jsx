import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: #c0a975;
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 5px;
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
  color: #e6f4f1;
  background-color: #e6f4f1;
  border-radius: 60px;
`;

export const CarIcon = styled.img`
  width: 30px;
  height: 30px;
  color: #3470ff;
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
    color: #6e5c2c;
  }
`;
