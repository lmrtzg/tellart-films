import React from 'react';
import Container from './style';

interface Props {
  animate: boolean;
  children: React.ReactChild;
}

const Backdrop: React.FC<Props> = ({ animate, children }) => (
  <Container animate={animate}>{children}</Container>
);

export default Backdrop;
