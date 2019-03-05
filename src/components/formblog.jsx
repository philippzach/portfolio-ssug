import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from 'react-emotion';

const Background = styled.div`
    background-color: #EBEBEB;
    width: 100%;
    display: flex;
    justify-content: center;
`
const Top = styled.h3`
font-size: 1.5em;
padding-left: 15px;
font-family: roboto;
color: #333333;
`
const Bottom = styled.h3`
margin: 0;
padding-bottom: 1em;
padding-left: 15px;
font-family: roboto;
color: #0C7EC3;
`
const Span = styled.a`
font-family: roboto;
text-decoration: underline;
color: #0C7EC3;
font-weight: 600;
`
const Form = styled.div`
display: flex;
@media (max-width: 800px) {
    flex-direction: column;
}
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
@media (max-width: 800px) {
    flex: 0 0 50px;
}
`

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  
    return (
      <div
      >
        {status === "sending" && <div style={{ color: "blue", paddingRight: "15px" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red", paddingRight: "15px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green", paddingRight: "15px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <Form>
       {/*  <input
          style={{ fontSize: "1.5em", padding: "10px", margin: "10px", backgroundColor: "rgba(26, 27, 31, .15)", borderStyle: "none" }}
          ref={node => (name = node)}
          type="text"
          placeholder="Name"
        />
        <br /> */}
        <input
          style={{ fontSize: "1.5em", padding: "10px", margin: "10px", backgroundColor: "rgba(26, 27, 31, .15)", borderStyle: "none" }}
          ref={node => (email = node)}
          type="email"
          placeholder="Email Address"
        />
        <br />
        <Button id="cta-subscribe-submit" onClick={submit} className="button -dark" style={{padding: "0"}}>
                Subscribe Now
            </Button>
        </Form>
      </div>
    );
  };
  
  class Demo extends Component {
    render() {
      const url =
        "https://ssuf.us13.list-manage.com/subscribe/post?u=fd499c5c6103d376d89973015&amp;id=ab74f43f98";
      return (
          
          <Container>
            <Top>Subscribe to get the latest news & updates.</Top>
            {/* <Bottom><Span href="/">Subscribe</Span> to our exclusive list.</Bottom> */}
        <div>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
        </Container>
        
      );
    }
  }

  export default Demo;