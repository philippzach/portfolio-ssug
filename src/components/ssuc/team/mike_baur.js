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

const Mike = () => {
  const data = useStaticQuery(graphql`
    query {
      focus: file(relativePath: { eq: "images/mike_baur.jpg" }) {
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
        <a href='https://www.linkedin.com/in/mike-baur/'>
          <Img
            fluid={data.focus.childImageSharp.fluid}
            alt='Mike Baur CEO of Swiss Startup Group Flagship Fund'
          />
        </a>
      </Image>
      <Dark>
        <PContainer>
          <Name>Mike Baur</Name>
          <Title>Co-Founder and CEO Swiss Startup Group AG</Title>
        </PContainer>
        {/* <Description>
          <Fifty>
            Mike Baur spent twenty years in Swiss Private Banking and has top
            management experience as Head of Private Banking Switzerland at one
            of the largest Swiss private banks. In 2015, Mike started his
            entrepreneurial journey and founded together with his two
            Co-Founders Max Meister and Oliver Walzer the Swiss Startup Group.
          </Fifty>
          <Fifty>
            <p>
              He currently serves as CEO of Swiss Startup Group AG, Chairman and
              member of the Investment Committee of Swiss Startup Capital AG and
              Board Director of various entities.
            </p>
            <p>
              Mike has been named as one of the top ten Digital Startup enablers
              in Switzerland. He holds an MBA from the University of Rochester
              New York as well as an Executive MBA from the University of Berne.
            </p>
          </Fifty>
        </Description> */}
      </Dark>
    </Section>
  );
};

export default Mike;
