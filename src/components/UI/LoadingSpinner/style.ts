import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../../../globalStyles';

const load8 = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  font-size: 1vw;
  position: absolute;
  top: 40%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-indent: -9999em;
  border-top: 0.7vw solid rgba(242, 223, 56, 0.2);
  border-right: 0.7vw solid rgba(242, 223, 56, 0.2);
  border-bottom: 0.7vw solid rgba(242, 223, 56, 0.2);
  border-left: 0.7vw solid #f2df38;
  transform: translateZ(0);
  animation: ${load8} 1.1s infinite linear;
  border-radius: 50%;
  width: 5vw;
  height: 5vw;

  &:after {
    border-radius: 50%;
    width: 5vw;
    height: 5vw;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 10vw;
    height: 10vw;
    left: 40%;

    &:after {
      width: 10vw;
      height: 10vw;
    }
  }
`;

export default Container;
