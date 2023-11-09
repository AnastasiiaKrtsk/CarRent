import React from 'react';
import carImage from '../../images/car.png';
import {
  CarIcon,
  HeaderContainer,
  HeaderWrapper,
  LogoLink,
  NavList,
  ItemLink,
} from './Header.styled';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <HeaderWrapper>
          <LogoLink to="/">
            <CarIcon src={carImage} alt="Car Icon" />{' '}
          </LogoLink>
        </HeaderWrapper>
        <NavList>
          <ItemLink to="/">Home</ItemLink>
          <ItemLink to="/catalog">Cars catalog</ItemLink>
          <ItemLink to="/favourites">Favourites</ItemLink>
        </NavList>
      </HeaderContainer>
    </header>
  );
};

export default Header;
