import React from 'react';
import styled from 'react-emotion';
import './form.css';

const Background = styled.div`
  background-color: #454a58;
`;
const Container = styled.div`
  margin: 5% 10%;
  padding: 6% 0;
`;
const Heading = styled.h4`
  color: white;

  font-size: 1.5em;
`;
const Subheading = styled.h5`
  color: white;
  text-transform: uppercase;

  font-weight: 300;
`;
const SideHeading = styled.h4`
  font-weight: 300;
  color: white;
  font-size: 1.5em;
  line-height: 1.5em;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 730px) {
    flex-direction: row;
  }
`;
const Fifty = styled.section`
  width: 100%;
  @media (min-width: 730px) {
    width: 50%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f0f1f4;
  padding: 2em 2em;
`;
const Link = styled.a`
  font-family: roboto;
  color: white;
  font-size: 0.8em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Thing = styled.span`
  max-width: 80%;
  position: relative;
  margin: auto;
  width: 100%;
  color: #9098a9;
  font-size: 16px;
  font-family: roboto;
  margin-top: 2em;
  margin-bottom: 0.45em;
`;

const Contact = () => (
  <Background>
    <Container>
      <Heading>Contact</Heading>
      <Subheading>General Inquiries</Subheading>
      <FlexBox>
        <Fifty>
          <Form action='https://formspree.io/info@ssuc.ch' method='POST'>
            <Thing>Name</Thing>
            <label htmlFor='inp' className='inp'>
              <input type='text' id='inp' name='Name' placeholder='&nbsp;' />
              <span className='label'>Enter Your Full Name</span>
              <span className='border' />
            </label>
            <Thing>Email Address</Thing>
            <label htmlFor='email' className='inp'>
              <input
                id='email'
                type='email'
                name='Email'
                placeholder='&nbsp;'
              />
              <span className='label'>Enter Your Email</span>
              <span className='border' />
            </label>
            <Thing>Message</Thing>
            <label htmlFor='textarea' className='inp'>
              <textarea id='textarea' name='Text' placeholder='&nbsp;' />
              <span className='label'>Enter Your Message</span>
              <span className='border' />
            </label>
            <input
              type='submit'
              className='submitbutton'
              value='Send Message'
            />
          </Form>
        </Fifty>
        <Fifty style={{ paddingLeft: '4em' }}>
          <SideHeading>
            Arrange a meeting and
            <br /> visit us in Zürich.
          </SideHeading>
          <Subheading style={{ marginBottom: '0' }}>Career</Subheading>
          <Link href='https://swissstartupjobs.com'>
            Open Vacancies <span>&#10230;</span>
          </Link>
          <Subheading style={{ marginTop: '2em', marginBottom: '0' }}>
            Investor Relations
          </Subheading>
          <Link href='mailto:info@ssuc.ch'>
            Contact <span>&#10230;</span>
          </Link>
        </Fifty>
      </FlexBox>
    </Container>
  </Background>
);

export default Contact;
