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

export const Ul = styled.ul<{ show: boolean }>`
  list-style: none;
  padding: 0.5rem 0;
  width: 90%;
  max-height: ${props => (props.show ? '10rem' : '2.5rem')};
  overflow: hidden;
  transition: max-height 200ms ease-out;
`;

export const Li = styled.li`
  display: block;
  padding: 0.2rem 0;
`;

export const LinkItem = styled(Link)<ScrollProps>`
  color: var(--yellow);
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.9rem;
  display: block;
  padding: 0.2rem 0;
`;

export const IconContainer = styled.li`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 1.5rem;
`;

export const Icon = styled.img``;
