import styled from 'styled-components';
import BaseSection from '../BaseStyles/index';
import Img from 'gatsby-image';
import { breakpoints } from '../../globalStyles';

export const Container = styled(BaseSection)`
  display: grid;
  place-items: center;
`;

export const Stripe = styled(Img)<{ fluid: string }>`
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;
