import styled from 'styled-components';
import { Link } from 'react-scroll';
import { breakpoints } from '../../../globalStyles';

interface ScrollProps {
  activeClass: string;
  to: string;
  spy: boolean;
  smooth: boolean;
  duration: number;
}

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 300ms;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
  }

  .active {
    color: white;
    transition: 300ms;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
  width: 90%;
`;

export const Li = styled.li<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  padding: 0.2rem 0;
`;

export const LinkItem = styled(Link)<ScrollProps>`
  color: var(--yellow);
  cursor: pointer;
  text-transform: uppercase;
  font-size: calc(0.7rem + 0.5vw);
  text-align: center;
  display: block;
  padding: 0.2rem 0;
`;

export const IconContainer = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Icon = styled.img``;