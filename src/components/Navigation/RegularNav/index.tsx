import React from 'react';
import { Container, Ul, Li, LinkItem } from './style';

const RegularNav: React.FC<{ changed: boolean }> = ({ changed }) => {
  return (
    <Container changed={changed}>
      <Ul>
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

export default RegularNav;
