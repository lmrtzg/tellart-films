import styled from 'styled-components';
import BaseSection from '../BaseStyles/index';
import { breakpoints } from '../../globalStyles';

export const Container = styled(BaseSection)`
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
