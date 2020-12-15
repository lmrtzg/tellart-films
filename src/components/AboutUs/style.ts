import styled from 'styled-components';
import Img from 'gatsby-image';
import BaseSection from '../BaseStyles/index';
import { breakpoints } from '../../globalStyles';

export const Container = styled(BaseSection)`
  padding-top: 1rem;
  height: 100%;

  @media (min-width: ${breakpoints.lg}) {
    padding-top: 4rem;
    height: 100vh;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1240px;
    grid-gap: 3rem;
  }

  @media (min-width: ${breakpoints.xxl}) {
    max-width: 1380px;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem;
  @media (min-width: ${breakpoints.md}) {
    grid-area: 1 / 1 / 1 / 3;
  }
  @media (min-width: ${breakpoints.xl}) {
    grid-area: auto;
    padding: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  padding-bottom: 0.8rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;

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

export const TitleUnderline = styled.span`
  border-bottom: 2px solid var(--black);
`;

export const Text = styled.p`
  font-size: 0.9rem;
  margin-top: 2rem;
  text-align: justify;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 1rem;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xxl}) {
    margin-top: 1rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const Director = styled.div`
  z-index: 1;
  position: relative;
  padding: 2rem;
  @media (min-width: ${breakpoints.xl}) {
    padding: 0 1rem;
  }
`;

export const Name = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  margin-top: 0.3rem;
`;

export const Job = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
`;

export const Stripe = styled(Img)<{ fluid: string }>`
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;
