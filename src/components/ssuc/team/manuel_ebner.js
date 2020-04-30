import React from 'react';
import styled from 'react-emotion';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
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

const Ebner = () => {
  const data = useStaticQuery(graphql`
    query {
      ebner: file(relativePath: { eq: "images/ebner_new.jpg" }) {
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
      <Dark>
        <PContainer>
          <Name>Manuel Ebner</Name>
          <Title>
            Country Executive Switzerland at Bank of America Merrill Lynch
          </Title>
        </PContainer>
        {/*  <Description>
          <Fifty>
            <p>
              Manuel Ebner has over 30 years of experience in strategy
              consulting and finance. After a first startup experience in the
              Silicon Valley in 1984, he has then been working as Partner at
              both BCG and McKinsey with a focus on financial services and
              technology.
            </p>
            <p>
              Thereafter, he has accumulated various experiences as CEO of
              Artificial Life Switzerland, Obtree Technologies, BZ Bank and
              Merrill Lynch Capital Markets.
            </p>
          </Fifty>
          <Fifty>
            <p>
              He currently serves as Country Executive at Bank of America
              Merrill Lynch Switzerland and maintains ongoing activities as
              angel investor and to companies in the AI, blockchain, biotech and
              medtech sector.
            </p>
            <p>
              Manuel Ebner holds bachelors in both Engineering and Economics
              from Stanford University as well as an MBA from the Stanford
              Graduate School of Business.
            </p>
          </Fifty>
        </Description> */}
      </Dark>
      <Image>
        <a href='https://www.linkedin.com/in/manuel-ebner-575133/'>
          <Img
            fluid={data.ebner.childImageSharp.fluid}
            alt='Manuel Ebner CFO of Swiss Startup Group Flagship Fund'
          />
        </a>
      </Image>
    </Section>
  );
};

export default Ebner;
