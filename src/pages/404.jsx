import React from 'react';
import {Link} from 'gatsby';
import styled from 'react-emotion';
import { Layout, Wrapper, Title, Navbar } from 'components';
import '../styles/pages/growth.css';

const Hero = styled.header`
 background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:top;
height: 150px;
background-color: grey;
`;

const Container = styled.div`
text-align: center;
margin: 5em 0;

`

const Fail = () => (
    <Layout>
        <Hero>
        <Navbar/>
        </Hero>
        <Wrapper>
            <Container>
            <h1>404</h1>
            <h3>Page not found</h3>
            <h4>Sorry, the page you are trying to find doesn't exist.</h4>
            <div className="button -dark">
            <Link to="/">Go Back</Link>  
            </div>
            </Container>
        </Wrapper>     
    </Layout>
);

export default Fail;