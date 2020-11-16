import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const Info = styled.div<{ showInfo: boolean }>`
  background: #fff;
  opacity: ${props => (props.showInfo ? '0.5' : '0')};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  visibility: ${props => (props.showInfo ? 'visible' : 'hidden')};
  transition: 400ms;
`;

export const TextContainer = styled.div<{ showInfo: boolean }>`
  opacity: ${props => (props.showInfo ? '1' : '0')};
  visibility: ${props => (props.showInfo ? 'visible' : 'hidden')};
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 6%;
`;

export const Job = styled.p`
  text-align: center;
  margin-top: 0.3rem;
  font-size: 0.9rem;
`;

export const Company = styled.p`
  text-transform: uppercase;
  text-align: center;
`;
