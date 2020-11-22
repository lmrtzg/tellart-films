import React from 'react';
import Container from './style';

interface Props {
  animate: boolean;
  children: React.ReactNode;
}

const Backdrop: React.FC<Props> = ({ animate, children }) => (
  <Container animate={animate}>{children}</Container>
);

export default Backdrop;
