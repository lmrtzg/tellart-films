import styled from 'styled-components';
import { breakpoints } from '../../globalStyles';

export const Container = styled.div`
  position: absolute;
  width: 80%;
  height: 50vw;
  left: 50%;
  top: 50%;
  margin: 0 auto;
  display: flex;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.img`
  width: 2vw;
  right: 0;
  top: 1%;
  position: absolute;
  cursor: pointer;

  @media (max-width: ${breakpoints.sm}) {
    width: 7vw;
    top: -10%;
  }
`;
