import React, { Component } from 'react';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import styled from 'react-emotion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Arrow from '../../images/arrow.svg';
import ArrowBack from '../../images/arrowback.svg';

const Paragraph = styled.p`
  line-height: 2em;
  margin-left: 10%;
  max-width: 40em;
  @media (min-width: 779px) {
    margin-left: 20%;
  }
`;
const Slide = styled.div`
  display: flex !important;
  flex-direction: column;
  @media all and (min-width: 550px) {
    flex-direction: row;
  }
`;
const Dark = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  display: grid;
  @media all and (min-width: 650px) {
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
  line-height: 1.5em;
`;

const PContainer = styled.div`
  padding: 5% 3em 0;
  display: flex;
  align-items: center;
`;
const SlideGridContainer = styled.div`
  padding: 0 3em;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
`;
const Fifty = styled.div`
  width: 100%;
  padding: 0em 1.5em 0 0;
  line-height: 1.5em;
  font-size: 0.85em;
  @media all and (min-width: 768px) {
    padding: 0em 2em 0 0;
  }
  @media all and (min-width: 1300px) {
    width: 50%;
    padding: 0em 2em 0 0;
  }
`;
const ArrowsContainer = styled.div`
  font-family: roboto;
  font-size: 0.8em;
  width: 100%;
  padding: 0em 1.5em 0 0;
  @media all and (min-width: 768px) {
    padding: 0em 2em 0 0;
  }
  @media all and (min-width: 1300px) {
    width: 100%;
    padding: 0em 2em 0 0;
  }
`;
const Arrows = styled.div``;
const ArrowImg = styled.img`
  margin-top: 1em;
  padding-right: 1em;
  @media all and (max-width: 1300px) {
    margin-top: 3em;
  }
`;
const Spacer = styled.div`
  margin: 3em 0;
`;

export default class Advisors extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <Spacer />
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <Slide key={1}>
            <Image>
              <Img
                fluid={this.props.data.urs.childImageSharp.fluid}
                alt='Urs Witlisback Advisor of Swiss Startup Group Flagship Fund'
              />
            </Image>
            <Dark>
              <PContainer>
                <Name>Urs Wietlisbach</Name>
              </PContainer>
              <SlideGridContainer>
                <Fifty>Co-Founder, Partners Group AG</Fifty>
                <Arrows>
                  <ArrowsContainer
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <ArrowImg
                      src={ArrowBack}
                      alt='Arrow'
                      onClick={this.previous}
                    />
                    <ArrowImg src={Arrow} alt='Arrow' onClick={this.next} />
                  </ArrowsContainer>
                </Arrows>
              </SlideGridContainer>
            </Dark>
          </Slide>
          <Slide key={2}>
            <Image>
              <Img
                fluid={this.props.data.peter.childImageSharp.fluid}
                alt='Peter Friedli Advisor of Swiss Startup Group Flagship Fund'
              />
            </Image>
            <Dark>
              <PContainer>
                <Name>Peter Friedli</Name>
              </PContainer>
              <SlideGridContainer>
                <Fifty>Founder, Friedli Corporate Finance, Inc.</Fifty>
                <Arrows>
                  <ArrowsContainer
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <ArrowImg
                      src={ArrowBack}
                      alt='Arrow'
                      onClick={this.previous}
                    />
                    <ArrowImg src={Arrow} alt='Arrow' onClick={this.next} />
                  </ArrowsContainer>
                </Arrows>
              </SlideGridContainer>
            </Dark>
          </Slide>
          <Slide key={3}>
            <Image>
              <Img
                fluid={this.props.data.patrick.childImageSharp.fluid}
                alt='Patrick Aebischer Advisor of Swiss Startup Group Flagship Fund'
              />
            </Image>
            <Dark>
              <PContainer>
                <Name>Patrick Aebischer</Name>
              </PContainer>
              <SlideGridContainer>
                <Fifty>President Emeritus, EPFL</Fifty>
                <Arrows>
                  <ArrowsContainer
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <ArrowImg
                      src={ArrowBack}
                      alt='Arrow'
                      onClick={this.previous}
                    />
                    <ArrowImg src={Arrow} alt='Arrow' onClick={this.next} />
                  </ArrowsContainer>
                </Arrows>
              </SlideGridContainer>
            </Dark>
          </Slide>
          <Slide key={4}>
            <Image>
              <Img
                fluid={this.props.data.christian.childImageSharp.fluid}
                alt='Christian Wildmoser Advisor of Swiss Startup Group Flagship Fund'
              />
            </Image>
            <Dark>
              <PContainer>
                <Name>Christian Wildmoser</Name>
              </PContainer>
              <SlideGridContainer>
                <Fifty>Former Partner, CVC Capital Partners</Fifty>
                <Arrows>
                  <ArrowsContainer
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <ArrowImg
                      src={ArrowBack}
                      alt='Arrow'
                      onClick={this.previous}
                    />
                    <ArrowImg src={Arrow} alt='Arrow' onClick={this.next} />
                  </ArrowsContainer>
                </Arrows>
              </SlideGridContainer>
            </Dark>
          </Slide>
          <Slide key={5}>
            <Image>
              <Img
                fluid={this.props.data.iurchristian.childImageSharp.fluid}
                alt='Dr. iur. Christian 
Wenger Advisor of Swiss Startup Group Flagship Fund'
              />
            </Image>
            <Dark>
              <PContainer>
                <Name>Dr. iur. Christian Wenger</Name>
              </PContainer>
              <SlideGridContainer>
                <Fifty>
                  Founder Swiss Startup Invest, Co-founder of
                  digitalswitzerland, Partner at Wenger & Vieli AG
                </Fifty>
                <Arrows>
                  <ArrowsContainer
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <ArrowImg
                      src={ArrowBack}
                      alt='Arrow'
                      onClick={this.previous}
                    />
                    <ArrowImg src={Arrow} alt='Arrow' onClick={this.next} />
                  </ArrowsContainer>
                </Arrows>
              </SlideGridContainer>
            </Dark>
          </Slide>
          <Slide key={6}>
            <Image>
              <Img
                fluid={this.props.data.pfister.childImageSharp.fluid}
                alt='Bruno Pfister 
Wenger Advisor of Swiss Startup Group Flagship Fund'
              />
            </Image>
            <Dark>
              <PContainer>
                <Name>Bruno Pfister</Name>
              </PContainer>
              <SlideGridContainer>
                <Fifty>
                  Former Executive Chairman of the Wealth Management and Trust
                  division at Rothschild & Co
                </Fifty>
                <Arrows>
                  <ArrowsContainer
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <ArrowImg
                      src={ArrowBack}
                      alt='Arrow'
                      onClick={this.previous}
                    />
                    <ArrowImg src={Arrow} alt='Arrow' onClick={this.next} />
                  </ArrowsContainer>
                </Arrows>
              </SlideGridContainer>
            </Dark>
          </Slide>
          <Slide key={7}>
            <Image>
              <Img
                fluid={this.props.data.brouhard.childImageSharp.fluid}
                alt='Alain Brouhard
Wenger Advisor of Swiss Startup Group Flagship Fund'
              />
            </Image>
            <Dark>
              <PContainer>
                <Name>Alain Brouhard</Name>
              </PContainer>
              <SlideGridContainer>
                <Fifty>Senior Advisor, Coca-Cola HBC AG</Fifty>
                <Arrows>
                  <ArrowsContainer
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <ArrowImg
                      src={ArrowBack}
                      alt='Arrow'
                      onClick={this.previous}
                    />
                    <ArrowImg src={Arrow} alt='Arrow' onClick={this.next} />
                  </ArrowsContainer>
                </Arrows>
              </SlideGridContainer>
            </Dark>
          </Slide>
        </Slider>
        <Spacer />
      </>
    );
  }
}
