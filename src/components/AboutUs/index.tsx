import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import {
  Container,
  Grid,
  Title,
  TitleUnderline,
  Text,
  Director,
  Name,
  Job,
  Stripe,
} from './style';

const AboutUs: React.FC = () => {
  const { carlotto, pacheco, stripe } = useStaticQuery(
    graphql`
      query {
        carlotto: file(relativePath: { eq: "carlotto.jpeg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pacheco: file(relativePath: { eq: "pacheco.jpeg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        stripe: file(relativePath: { eq: "stripe.png" }) {
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
    <Container id="about-us">
      <Grid>
        <div>
          <Title>
            Sobre <TitleUnderline>nós</TitleUnderline>
          </Title>
          <Text>
            Somos uma produtora de cinema, filmes publicitários e filmes
            institucionais localizada na região de Porto Alegre.
          </Text>
          <Text>
            Somos apaixonados por contar histórias e acreditamos no poder que
            elas têm de transformar o mundo engajando de forma significativa
            cada uma das pessoas que ela toca.
          </Text>
          <Text>
            Para fazer isso, trazemos para cada trabalho que criamos as mesmas
            técnicas usadas no cinema com o intuito de fazer com que cada frame
            tenha um papel intensificador no que estamos contando.
          </Text>
        </div>
        <Director>
          <Img
            fluid={carlotto.childImageSharp.fluid}
            alt="Guilherme Carlotto"
            style={{
              marginTop: '1.5rem',
            }}
          />
          <Name>Guilherme Carlotto</Name>
          <Job>Diretor e Produtor</Job>
        </Director>
        <Director>
          <Img
            fluid={pacheco.childImageSharp.fluid}
            alt="Guilherme Pacheco"
            style={{
              marginTop: '1.5rem',
            }}
          />
          <Name>Guilherme Pacheco</Name>
          <Job>Diretor e Produtor</Job>
        </Director>
      </Grid>
      <Stripe
        fluid={stripe.childImageSharp.fluid}
        alt="Stripe"
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '5%',
          width: '20%',
        }}
      />
    </Container>
  );
};

export default AboutUs;
