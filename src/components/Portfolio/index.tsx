import React from 'react';
import { IPortfolioItems } from '../../PorfolioItems';
import { Container, Grid } from './style';
import PortfolioItem from './PortfolioItem/index';

interface Props {
  portItems: Array<IPortfolioItems>;
  onPortItemClick(link: string): any;
}

const Portfolio: React.FC<Props> = ({ portItems, onPortItemClick }) => {
  return (
    <Container id="portfolio">
      <Grid>
        {portItems.map(item => {
          return (
            <PortfolioItem
              key={item.name}
              image={item.image}
              job={item.job}
              company={item.company}
              onClick={() => onPortItemClick(item.link)}
            ></PortfolioItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Portfolio;
