import styled from 'styled-components';
import BaseSection from '../BaseStyles/index';
import bg from '../../images/BG-1.jpg';

export const Container = styled(BaseSection)`
  background-image: url(${bg});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
`;

export const LogoContainer = styled.div`
  max-width: 325px;
`;

export const LogoText = styled.h1`
  color: var(--yellow);
  text-align: center;
  font-weight: 500;
  font-size: calc(0.7rem + 0.5vw);
  margin-top: 0.6rem;
`;
