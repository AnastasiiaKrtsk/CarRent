import React from 'react';
import { Btn, Container, LinkBtn, Title } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <Container>
        <Title>TIttle</Title>
        <Btn>
          <LinkBtn to="/catalog">Reserve Now</LinkBtn>
        </Btn>
      </Container>
    </>
  );
};

export default Hero;
