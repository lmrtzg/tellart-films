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

export const Container = styled.nav<{ changed: boolean }>`
  position: ${props => (props.changed ? 'fixed' : 'absolute')};
  width: 100%;
  top: ${props => (props.changed ? '0' : '8%')};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.changed ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
  transition: ${props => (props.changed ? 'background-color 300ms' : '')};

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }

  .active {
    color: white;
    transition: 300ms;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
`;

export const Li = styled.li`
  display: inline;

  &:not(:last-child)::after {
    content: '|';
    margin: 0 0.85em;
    color: var(--yellow);
    font-size: 1.2rem;
  }
`;

export const LinkItem = styled(Link)<ScrollProps>`
  color: var(--yellow);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2rem;
  &:hover {
    color: white;
  }
`;
