import React from 'react';
import { Container, Stripe } from './style';
import Content from './Content/index';
import { graphql, useStaticQuery } from 'gatsby';

const WhatWeDo: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "stripe.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <Container id="what-we-do">
      <Content />
      <Stripe
        fluid={data.file.childImageSharp.fluid}
        style={{
          position: 'absolute',
          left: '3%',
          bottom: '5%',
          width: '20%',
        }}
      />
      <Stripe
        fluid={data.file.childImageSharp.fluid}
        style={{
          position: 'absolute',
          right: '-6%',
          bottom: '25%',
          width: '20%',
          transform: 'rotate(90deg)',
        }}
      />
    </Container>
  );
};
export default WhatWeDo;
