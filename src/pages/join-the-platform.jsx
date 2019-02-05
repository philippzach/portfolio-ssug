import React from 'react';
import { Layout, Wrapper, NavbarInverted } from 'components';
import styled from 'react-emotion';
import '../styles/pages/join-the-platform.css'

/* const BackgroundNavbar = styled.div`
background-color: grey;
` */

const Join = () => (
    <Layout>
        <NavbarInverted />
        <section className="page-section text_hero">
            <div className="grid-container">
                <div className="pnp__hero-block pnp__text-hero" style={{backgroundColor: "#f7f7f7"}}>
                    <div className="grid-container" style={{padding: "3em"}}>
                        <div className="grid-x align-middle">
                            <div className="cell">
                                <h1 className="extraline">
                                Join Switzerland's number 1 platform.
                                </h1>
                                <h3>
                                Connecting the best technology startups, corporates, investors and talents.
                                </h3>
                                <p>
                                Whether you're a corporation looking for innovation, a startup looking for a boost, or a VC looking to meet great startups, we're the right place for you.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Join