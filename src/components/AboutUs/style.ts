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
  width: 80%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4vw;
    width: 90%;
  }

  @media (min-width: ${breakpoints.xxl}) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: calc(1rem + 3.4vw);
  padding-bottom: 0.8rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;

  @media (max-width: ${breakpoints.sm}) {
    padding-bottom: 0.3rem;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xxl}) {
    font-size: calc(1rem + 3vw);
  }
`;

export const TitleUnderline = styled.span`
  border-bottom: 2px solid var(--black);
`;

export const Text = styled.p`
  font-size: calc(0.8rem + 0.5vw);
  margin-top: 2rem;
  text-align: justify;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 1rem;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xxl}) {
    margin-top: 1rem;
  }
`;

export const Director = styled.div``;

export const Name = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: calc(0.7rem + 0.2vw);
  margin-top: 0.3rem;
`;

export const Job = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: calc(0.7rem + 0.2vw);
`;

export const Stripe = styled(Img)<{ fluid: string }>`
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;
