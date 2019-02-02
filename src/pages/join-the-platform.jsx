import React from 'react';
import { Layout, Wrapper, Navbar } from 'components';
import styled from 'react-emotion';

const BackgroundNavbar = styled.div`
background-color: grey;
`

const Join = () => (
    <Layout>
        <BackgroundNavbar>
            <Navbar />
        </BackgroundNavbar>
        <div stlye={{height: "40em"}}>
            
        </div>
    </Layout>
)

export default Join