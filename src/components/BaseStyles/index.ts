import styled from 'styled-components';
import { breakpoints } from '../../globalStyles';

const BaseSection = styled.section`
  background-color: var(--white);
  height: 100vh;
  width: 100%;
  position: relative;

  @media (max-width: ${breakpoints.sm}) {
    height: 70vh;
  }
`;

export default BaseSection;
