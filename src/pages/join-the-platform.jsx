import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout, Wrapper, Navbar } from 'components';
import styled from 'react-emotion';
import Input from '../components/jointheplatform-input';
import '../styles/pages/join-the-platform.css';
import '../styles/input.css';
import Cindy from '../../static/cindyspelt.jpg';


const Box = styled.div`
display: flex;
justify-content: space-between;
margin: 2em 0;
` 
const Label = styled.label`
line-height: 1.5em;
`
const Half = styled.div`
width: 100%;
margin: auto;
text-align: center;
@media (min-width: 700px) {
    width: 50%
}
`
const Cta = styled.a`
color: black;
font-weight: 600;
`
const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`

const Join = ({ data }) => (
    <Layout>
        <Navbar />
        <Test> 
          <Img fluid={data.join.childImageSharp.fluid} className="w-100" />
        </Test>
        <section className="page-section text_hero">
            <div className="grid-container">
                <div className="pnp__hero-block pnp__text-hero" >
                    <div className="grid-container" style={{padding: "3em"}}>
                        <div className="grid-x align-middle">
                            <div className="cell">
                                <h1 className=" extraline">
                                Join Switzerland's number 1 platform.
                                </h1>
                                <h3 style={{lineHeight: "1.2em"}}>
                                Connecting the best technology startups, corporates, investors and talents.
                                </h3>
                                <p style={{    fontSize: "1.25rem",
                                                lineHeight: "1.4"}}>
                                Whether you're a corporation looking for innovation, a startup looking for a boost, or a VC looking to meet great startups, we're the right place for you.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
        
        <Input >
             <div className="box">
             <form action="https://formspree.io/your@email.com" method="POST" style={{margin: "auto"}}>
                    {/* <Box>
                    <Label for="Info">Information for Startups</Label>
                    <input className="option-input" type="checkbox" name="InfoStartup" value="Startup"/>
                    </Box>
                    <Box>
                    <Label for="Info">Information for Corporations</Label>
                    <input className="option-input" type="checkbox" name="InfoCorp" value="Corporation"/>
                    </Box>
                    <Box>
                    <Label for="Info">Information about our Portfolio<br/> and Investment possibilities</Label>
                    <input className="option-input" type="checkbox" name="InfoInvest" value="Investor"/>
                    </Box> */}
                <input type="text" name="company" className="emailinput" placeholder="Company Name" />    
                <input style={{margin: "1.5em 0"}} className="emailinput" type="email" placeholder="Enter your Email" name="_replyto"/>
                <textarea name="message" className="textareainput" placeholder="Message ..." />
                <input className="button -dark" style={{
                    boxShadow: "none",
                    backgroundColor: "rgb(230, 230, 234)",
                    margin: "1em 0",
                    color: "rgb(85,85,85)",
                    float: "right"}} type="submit" value="Send"/>
                </form>
             </div>
         </Input>
         <div className="box">
            <Half>
            <img style={{borderRadius: "15rem", zoom: ".4"}} src={Cindy} alt=""/>
            <h3 style={{margin: "1em 0"}}>Cindy Spelt</h3>
            <h4 style={{margin: "1em 0"}}>Head of Platform</h4>
            </Half>
            <Half>
            {/* <p>
            <svg style={{paddingRight: "10px"}} height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.839 13.84c-2.372 2.378-5.12 4.648-6.209 3.56-1.557-1.56-2.517-2.913-5.951-.155s-.796 4.598.712 6.106c1.74 1.74 8.226.091 14.64-6.32s8.06-12.898 6.32-14.64c-1.512-1.505-3.347-4.139-6.105-.711s-1.403 4.39.153 5.946c1.088 1.094-1.182 3.841-3.56 6.214z"/></svg>
            <Cta href="tel:0041111111111">0000012222222222</Cta></p> */}
            <p>
            <svg style={{paddingRight: "10px"}} height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.484 11.976 6.151-5.344v10.627zm-7.926.905 2.16 1.875c.339.288.781.462 1.264.462h.017-.001.014c.484 0 .926-.175 1.269-.465l-.003.002 2.16-1.875 6.566 5.639h-20.009zm-6.572-7.516h20.03l-9.621 8.356c-.104.082-.236.132-.38.132-.005 0-.009 0-.014 0h.001c-.004 0-.009 0-.014 0-.144 0-.277-.05-.381-.133l.001.001zm-.621 1.266 6.15 5.344-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19h-20.285c-.3.001-.584.071-.835.197l.011-.005c-.618.309-1.035.937-1.035 1.663v.004 12.168c.001 1.026.833 1.857 1.858 1.858h20.283c1.026-.001 1.857-.833 1.858-1.858v-12.168c0-.001 0-.002 0-.004 0-.727-.419-1.357-1.029-1.66l-.011-.005z"/></svg>
            <Cta href="mailto:cindy.spelt@ssuf.ch">cindy.spelt@ssuf.ch</Cta></p>
            </Half>
         </div>
    </Layout>
)

export default Join

export const query = graphql`
  query {
    join: file(relativePath: { eq: "images/join-the-platform.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
  }`
