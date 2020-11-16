import styled from 'styled-components';
import BaseSection from '../BaseStyles/index';
import Img from 'gatsby-image';
import { breakpoints } from '../../globalStyles';

export const Container = styled(BaseSection)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Stripe = styled(Img)<{ fluid: string }>`
  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
