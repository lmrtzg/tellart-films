import React, { useState } from 'react';
import 'typeface-lato';
import 'typeface-courier-prime';
import HeroSection from '../components/HeroSection/index';
import WhatWeDo from '../components/WhatWeDo/index';
import { GlobalStyle } from '../globalStyles';
import Portfolio from '../components/Portfolio';
import { graphql } from 'gatsby';
import PortfolioItems, { IPortfolioItems } from '../PorfolioItems';
import AboutUs from '../components/AboutUs/index';
import Contact from '../components/Contact/index';
import Backdrop from '../components/Backdrop/index';
import VideoPlayer from '../components/VideoPlayer/index';
import RegularNav from '../components/Navigation/RegularNav/index';
import MobileNav from '../components/Navigation/MobileNav/index';
import { Waypoint } from 'react-waypoint';
import SEO from '../components/seo';

const IndexPage: React.FC<{ data: any }> = ({ data }) => {
  const [isVideoOpen, changeVideoSate] = useState(false);
  const [videoLink, changeVideoLink] = useState('');
  const [RegularNavState, changeRegularNavState] = useState(false);
  const [MobileNavState, changeMobileNavSate] = useState(false);

  const HandleMobileNavClick = () => {
    const rightState = !MobileNavState;
    changeMobileNavSate(rightState);
  };

  const openVideoPlayer = (link: string) => {
    changeVideoLink(link);
    changeVideoSate(true);
  };

  const porItems: Array<IPortfolioItems> = PortfolioItems.map(item => {
    const correctImage = data.allFile.edges.findIndex(
      el => el.node.name === item.name
    );

    item.image = data.allFile.edges[correctImage].node.childImageSharp.fluid;
    return item;
  });

  return (
    <>
      <SEO />
      <GlobalStyle />
      {isVideoOpen ? (
        <Backdrop animate={isVideoOpen}>
          <VideoPlayer
            link={videoLink}
            onClose={() => changeVideoSate(false)}
          />
        </Backdrop>
      ) : null}
      <MobileNav show={MobileNavState} onClick={HandleMobileNavClick} />
      <RegularNav changed={RegularNavState} />
      <Waypoint
        onLeave={() => changeRegularNavState(true)}
        onEnter={() => changeRegularNavState(false)}
      />
      <main>
        <HeroSection />
        <WhatWeDo />
        <Portfolio onPortItemClick={openVideoPlayer} portItems={porItems} />
        <AboutUs />
        <Contact />
      </main>
    </>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/images/PortfolioImages/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
