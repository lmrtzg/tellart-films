import styled from 'styled-components';
import { breakpoints } from '../../../globalStyles';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: ${breakpoints.md}) {
    max-width: 600px;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  text-align: center;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--black);
  padding-bottom: 0.8rem;

  @media (max-width: ${breakpoints.sm}) {
    padding-bottom: 0.3rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 3.8rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 4.4rem;
  }
`;

export const Text = styled.p`
  font-size: 0.9rem;
  margin-top: 2rem;
  text-align: justify;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 1rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.4rem;
  }
`;
