import React from 'react';
import { Container, Ul, Li, LinkItem, IconContainer, Icon } from './style';
import MenuIcon from '../../../images/MenuIcon.svg';

interface Props {
  show: boolean;
  onClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const MobileNav: React.FC<Props> = ({ show, onClick }) => {
  return (
    <Container>
      <Ul show={show}>
        <IconContainer>
          <Icon onClick={onClick} src={MenuIcon} alt="Ícone menu"></Icon>
        </IconContainer>
        <Li>
          <LinkItem
            activeClass="active"
            to="what-we-do"
            spy={true}
            smooth={true}
            duration={500}
          >
            O que fazemos
          </LinkItem>
        </Li>
        <Li>
          <LinkItem
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfólio
          </LinkItem>
        </Li>
        <Li>
          <LinkItem
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            duration={700}
          >
            Sobre nós
          </LinkItem>
        </Li>
        <Li>
          <LinkItem
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={700}
          >
            Conte sua História
          </LinkItem>
        </Li>
      </Ul>
    </Container>
  );
};

export default MobileNav;
