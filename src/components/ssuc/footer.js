import React from 'react';
import styled from 'react-emotion';
import Logo from '../../images/ssuc.svg';

const Container = styled.footer`
  margin: 5% 20%;
`;
const SuperSmall = styled.p`
  font-size: 0.5em;
  line-height: 1.5em;
`;
const Grid = styled.section`
  display: grid;
  /* Define Auto Row size */
  /*Define our columns */
  grid-template-columns: 200px;
  justify-content: space-between;
  grid-gap: 1em;
  @media (min-width: 550px) {
    grid-template-columns: 200px 200px;
  }
  @media (min-width: 970px) {
    grid-template-columns: 200px 200px 200px;
  }
`;
const Column = styled.div`
  font-size: 0.8em;
`;
const Spacer = styled.div`
  margin: 2em;
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
const ImageCont = styled.div`
  width: 25%;
  @media (max-width: 900px) {
    width: 50%;
  }
`;

const Layout = () => (
  <Container>
    <ImageCont>
      <img src={Logo} alt='Swiss Startup Group Flagship Fund Logo' />
    </ImageCont>
    <Spacer />
    <Grid>
      <Column>
        <b>Imprint</b>
        <br />
        Swiss Startup Capital AG
        <br />
        Färberstrasse 6<br />
        8008 Zürich
        <br />
        Switzerland
        <br />
        <Link href='mailto:info@ssuc.ch'>
          <b>info@ssuc.ch</b>
        </Link>
        <br />
      </Column>
      <Column>
        <b>Authorized representative</b> <br />
        Mike Baur
        <br />
        Max Meister
        <br />
        Oliver Walzer
        <br />
        Michael Widmer
        <br />
        Guillaume Waser
        <br />
        Vincent Oswald
      </Column>
      <Column>
        <b>Commercial register entry</b>
        <br />
        Registered company name:
        <br />
        Swiss Startup Capital AG
        <br />
        <div style={{ margin: '1.5em' }} />
        <b>Commercial Register No: </b>
        <br />
        VAT number
        <br />
        CHE-342.590.804
        <br />
      </Column>
    </Grid>
    <Spacer />
    <hr />
    <SuperSmall>
      The material on this website has been prepared by the Swiss Startup Group.
      This information is given in summary form and does not purport to be
      complete. Information on this page, including forecast financial
      information, should not be considered as advice or a recommendation to
      investors or potential investors in relation to investing and does not
      take into account your particular investment objectives, financial
      situation or needs. Before acting on any information you should consider
      the appropriateness of the information having regard to these matters, any
      relevant offer document and in particular, you should seek independent
      financial advice. All securities and financial product or instrument
      transactions involve risks, which include (among others) the risk of
      adverse or unanticipated market, financial or political developments and,
      in international transactions, currency risk. While due care has been used
      in the preparation of forecast information, actual results may vary in a
      materially positive or negative manner. Forecasts and hypothetical
      examples are subject to uncertainty and contingencies outside the Swiss
      Startup Groups control. Past performance is not a reliable indication of
      future performance.
    </SuperSmall>
  </Container>
);

export default Layout;
