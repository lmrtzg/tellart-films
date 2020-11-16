import styled from 'styled-components';
import { breakpoints } from '../../../globalStyles';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.lg}) {
    width: 35%;
  }
`;

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: calc(1rem + 3.7vw);
  border-bottom: 2px solid var(--black);
  padding-bottom: 0.8rem;

  @media (max-width: ${breakpoints.sm}) {
    padding-bottom: 0.3rem;
  }
`;

export const Text = styled.p`
  font-size: calc(0.8rem + 0.5vw);
  margin-top: 2rem;
  text-align: justify;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 1rem;
  }
`;
