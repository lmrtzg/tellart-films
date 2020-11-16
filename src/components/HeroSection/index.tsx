import React from 'react';
import { Container, LogoContainer, LogoText } from './style';
import img from '../../images/logo.svg';

const HeroSection: React.FC = () => (
  <Container>
    <LogoContainer>
      <img src={img} alt="Tellart Films" />
      <LogoText>APAIXONADOS POR CONTAR HISTÓRIAS</LogoText>
    </LogoContainer>
  </Container>
);

export default HeroSection;
