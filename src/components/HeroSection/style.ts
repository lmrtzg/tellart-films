import styled from 'styled-components';
import BaseSection from '../BaseStyles/index';
import bg from '../../images/BG-1.jpg';
import { breakpoints } from '../../globalStyles';

export const Container = styled(BaseSection)`
  background-image: url(${bg});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogoContainer = styled.div`
  width: 25%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  @media (max-width: ${breakpoints.sm}) {
    width: 70%;
  }
`;

export const LogoText = styled.h1`
  color: var(--yellow);
  text-align: center;
  font-weight: 500;
  font-size: calc(0.7rem + 0.5vw);
  margin-top: 0.6rem;
`;
