import styled from 'styled-components';

const Container = styled.div<{ animate: boolean }>`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100%;
  visibility: ${props => (props.animate ? 'visible' : 'hidden')};
  opacity: ${props => (props.animate ? '1' : '0')};
  transition: 500ms;
`;

export default Container;
