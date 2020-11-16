import React, { useState } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { Container, Info, Job, TextContainer, Company } from './style';

interface Props {
  image: FluidObject;
  job: string;
  company: string;
  onClick(): any;
}

const PortfolioItem: React.FC<Props> = ({ image, job, company, onClick }) => {
  const [showingInfo, changeInfo] = useState(false);
  return (
    <Container
      onClick={onClick}
      onMouseEnter={() => changeInfo(true)}
      onMouseLeave={() => changeInfo(false)}
    >
      <Info showInfo={showingInfo} />
      <Img fluid={image} alt={job} />
      <TextContainer showInfo={showingInfo}>
        <Company>{company}</Company>
        <Job>{job}</Job>
      </TextContainer>
    </Container>
  );
};

export default PortfolioItem;
