import React, {Component} from 'react';
import { Layout, Wrapper, NavbarInverted, Title } from 'components';
import Seo from '../components/SEO/index';
import styled from 'react-emotion';
import {Link} from 'gatsby'
import '../styles/company-profile.css'

const Container = styled.div`
padding-top: 10em;
`
const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: auto;
    margin-left: -8px;
    margin-right: -8px;
    margin-bottom: -16px;
`
const Column = styled.div`
    width: 100%;
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 16px;
    @media (min-width: 769px) {
    width: 50%;
}
`
const Paragraph = styled.p`
font-size: .9rem;
font-family: poppins;
font-weight: 300;
`
const ParagraphLong = styled.p`
font-size: 1rem;
line-height: 35px;
font-family: poppins;
font-weight: 300;
margin-top: 2rem;
margin-bottom: 6rem;
`
const Linkto = styled.a`
font-size: .9rem;
font-family: poppins;
font-weight: 300;
`
const Key = styled.div`
    font-size: 1.25rem;
    line-height: 1.2em;
    font-weight: bold;
`

class Profile extends React.Component {
render() {
    return (
        <Layout>
        <Seo title={"Swiss Startup Group - " + this.props.title + " - Investment Portfolio"} desc={this.props.title + "is part of our Investment Portfolio at Swiss Startup Group since " + this.props.founded}/>
        <NavbarInverted />
            <Wrapper>
            <Container>
                <div className="tc">
                <Link className="backlink" to="/investmentportfolio" style={{ color: "black", fontWeight: "bold" }}>
                <svg class="Button__icon" fill="#333" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M12 0L0 12l12 12 3.404-3.404-6.408-6.41H24V9.814H8.996l6.408-6.41" fill-rule="evenodd"></path> </svg>
                Investment Portfolio
                </Link>
                </div>
                <img className="mt6 mb6" src={this.props.image} alt={this.props.title}/>
                <h1 className="mb5">{this.props.title}</h1>
                <h2>{this.props.shortdesc}</h2>
                <Group>
                    <Column>
                        <Key>Founded</Key>
                        <div>
                            <Paragraph>{this.props.founded}</Paragraph>
                        </div>
                    </Column>
                    <Column>
                        <Key>Location</Key>
                        <div>
                            <Paragraph>{this.props.location}</Paragraph>
                        </div>
                    </Column>
                    <Column>
                        <Key>Management</Key>
                        <div>
                            <Paragraph>{this.props.management}</Paragraph>
                        </div>
                    </Column>
                    <Column>
                        <Key>Investment</Key>
                        <div>
                            <Paragraph>{this.props.investment}</Paragraph>
                        </div>
                    </Column>
                    <Column>
                        <Key>Segment</Key>
                        <div>
                            <Paragraph>{this.props.segment}</Paragraph>
                        </div>
                    </Column>
                    <Column>
                        <Key>Website</Key>
                        <div>
                            <Linkto style={{color: "black"}} href={this.props.website}>{this.props.website}</Linkto>
                        </div>
                    </Column>
                </Group>
                <ParagraphLong>
                    {this.props.paragraph}
                </ParagraphLong>
            </Container>    
            </Wrapper>    
        </Layout>
    )
}
}


export default Profile;