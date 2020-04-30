import React from 'react';
import styled from 'react-emotion';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 550px) {
    flex-direction: row;
  }
`;
const Dark = styled.div`
  background-color: #454a58;
  width: 100%;
  display: flex;

  align-items: center;

  @media all and (min-width: 550px) {
    width: 66.66%;
  }
`;
const Image = styled.div`
  width: 100%;
  @media all and (min-width: 550px) {
    width: 33.33%;
  }
`;
const Name = styled.h5`
  font-weight: 300;
  font-size: 2em;
  margin-bottom: 0.25em;
  color: white;
  line-height: 1.5em;
`;
const Title = styled.p`
  font-family: roboto;
  font-size: 0.85em;
  color: white;
  margin-bottom: 0;
`;

const PContainer = styled.div`
  padding: 5% 3em;
`;
const Description = styled.div`
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Fifty = styled.div`
  font-family: roboto;
  color: white;
  font-size: 0.8em;
  width: 100%;
  padding: 0em 1.5em 0 0;
  @media all and (min-width: 768px) {
    width: 50%;
    padding: 0em 2em 0 0;
  }
`;

const Stucky = () => {
  const data = useStaticQuery(graphql`
    query {
      michael: file(relativePath: { eq: "images/stuky_new.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Section>
      <Image>
        <a href='https://www.linkedin.com/in/michael-stucky-a1b06bb/'>
          <Img
            fluid={data.michael.childImageSharp.fluid}
            alt='Mike Baur CEO of Swiss Startup Group Flagship Fund'
          />
        </a>
      </Image>
      <Dark>
        <PContainer>
          <Name>Michael Stucky</Name>
          <Title>
            Coach & Mentor for aspiring entrepreneurs at ETH Zurich and
            Innosuisse
          </Title>
        </PContainer>
        {/*  <Description>
          <Fifty>
            Michael Stucky has 10 years of experience as entrepreneur and coach for early stage startups. He has
            co-founded several startups in both Switzerland and the Silicon Valley. Moreover, he has 10 years experience
            in finance and banking, both in asset management and corporate finance.
          </Fifty>
          <Fifty>
            <p>
              Michael Stucky has held various positions in top management: In 2004 he was CEO of the North American
              subsidiary of a major Swiss Private Bank, in 2011 he was Co-Founder and CFO of ETH spinoff GlycoVaxyn AG
              and he is Co-Founder and Chairman of the board of ETH spinoff Auxivo AG. He is currently mentor and coach
              for aspiring entrepreneurs at the ETH Zurich and the Swiss Innovation Agency Innosuisse.
            </p>
            <p>
              Michael Stucky holds a Master in Management from Stanford Graduate School of Business as well as an MBA
              from the University of Zurich.
            </p>
          </Fifty>
        </Description> */}
      </Dark>
    </Section>
  );
};

export default Stucky;
