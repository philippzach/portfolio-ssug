import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Logo from '../images/ssuc.svg';
// import '../components/ssuc/button.css';

const Container = styled.div`
  margin: 3em;
`;
const Image = styled.div`
  text-align: center;
`;
const Text = styled.div`
  max-width: 50em;
  margin: 0 auto;
  text-align: center;
`;

const TermsFalse = () => (
  <Container>
    <Image>
      {' '}
      <img style={{ width: '185px' }} src={Logo} alt='SSUC Logo' />
    </Image>
    <Text>
      <h2 style={{ lineHeight: '1.5em' }}>
        Please return and accept our terms and conditions to see the content of
        this website.
      </h2>
      <Link className='button -dark center' to='/ventureassetmanagement'>
        Return to Terms & Conditions
      </Link>
    </Text>
  </Container>
);

export default TermsFalse;
