import React from 'react';
import sprite from '../../images/sprite.svg';
import { Container, LinkBtn, Title, TittleSpan } from './Hero.styled';
const Hero = () => {
  return (
    <Container>
      <Title>
        Explore the world on your own terms with our{' '}
        <TittleSpan>car rental</TittleSpan> services.
      </Title>
      <LinkBtn to="/catalog">Reserve Now</LinkBtn>
    </Container>
  );
};

export default Hero;
