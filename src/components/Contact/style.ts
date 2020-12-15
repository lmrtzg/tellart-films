import styled from 'styled-components';
import { breakpoints } from '../../globalStyles';

export const Container = styled.footer`
  height: 100vh;
  width: 100%;
  background-color: var(--white);
`;

export const ContainerFlex = styled.div`
  display: grid;
  place-items: center;
  height: 90%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: calc(1rem + 2.8vw);
  font-family: 'Lato', sans-serif;
  font-weight: 300;
`;

export const Email = styled.a`
  text-align: center;
  margin-top: 0.7rem;
  margin-bottom: 3vw;
  font-size: calc(0.5rem + 1.2vw);
  display: block;
  transition: color 100ms;

  &:hover {
    color: gray;
  }
`;

export const InstaIcon = styled.svg`
  width: 6vw;
  text-align: center;
  display: block;
  margin: 0 auto;
  transition: 100ms;

  &:hover {
    fill: var(--yellow);
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 4vw;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 3vw;
  }
`;

export const MadeBy = styled.a`
  display: block;
  text-align: center;
  text-decoration: underline;
  transition: color 100ms;

  &:hover {
    color: gray;
  }
`;
