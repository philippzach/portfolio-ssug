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

`

class Profile extends React.Component {
render() {
    return (
        <Layout>
        <Seo title="" desc=""/>
        <NavbarInverted />
            <Wrapper>
            <Container>
                <Link className="backlink" to="/investmentportfolio" style={{ color: "black", fontWeight: "bold" }}>
                <svg class="Button__icon" fill="#333" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M12 0L0 12l12 12 3.404-3.404-6.408-6.41H24V9.814H8.996l6.408-6.41" fill-rule="evenodd"></path> </svg>
                Portfolio
                </Link>
                <img src={this.props.image} alt={this.props.title}/>
                <h1>{this.props.title}</h1>
                <h2>{this.props.shortdesc}</h2>
                <Group>
                    <Column>
                        <div>Founded</div>
                        <div>
                            <p>{this.props.founded}</p>
                        </div>
                    </Column>
                    <Column>
                        <div>Location</div>
                        <div>
                            <p>{this.props.location}</p>
                        </div>
                    </Column>
                    <Column>
                        <div>Management</div>
                        <div>
                            <p>{this.props.management}</p>
                        </div>
                    </Column>
                    <Column>
                        <div>Investment</div>
                        <div>
                            <p>{this.props.investment}</p>
                        </div>
                    </Column>
                    <Column>
                        <div>Segment</div>
                        <div>
                            <p>{this.props.segment}</p>
                        </div>
                    </Column>
                    <Column>
                        <div>Website</div>
                        <div>
                            <a style={{color: "black"}} href={this.props.website}>{this.props.website}</a>
                        </div>
                    </Column>
                </Group>
                <Paragraph>
                    {this.props.paragraph}
                </Paragraph>
            </Container>    
            </Wrapper>    
        </Layout>
    )
}
}


export default Profile;