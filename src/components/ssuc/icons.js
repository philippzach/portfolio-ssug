import React from 'react';
import styled from 'react-emotion';
import Innovation from '../../images/innovation.svg';
import Scalability from '../../images/scalability.svg';
import Proximity from '../../images/proximity.svg';

const Container = styled.div`
  margin: 2.5% 10%;
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  grid-gap: 1em;
  transform: scale(0.8);
  @media (min-width: 550px) {
    grid-template-columns: 300px 300px;
  }
  @media (min-width: 868px) {
    grid-template-columns: 300px 300px 300px;
  }
`;
const Cube = styled.div`
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  background-color: #f0f1f4;
  box-shadow: rgba(0, 0, 0, 0.22) 2px 4px 10px;
  padding: 1.5em;
  height: 150px;
  width: 150px;
  margin: 0 auto;
`;
const Header = styled.h4`
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 400;
  padding-top: 1em;
  text-align: center;
`;
const Text = styled.p`
  line-height: 1.5em;
  text-align: center;
`;

const Icons = () => (
  <Container>
    <Cube>
      <Icon src={Innovation} />
      <Header>Innovation</Header>
      <Text>Focus on disruptive technologies</Text>
    </Cube>
    <Cube>
      <Icon src={Scalability} />
      <Header>Scalability</Header>
      <Text>Exceptional Teams and high growth potential</Text>
    </Cube>
    <Cube>
      <Icon src={Proximity} />
      <Header>Proximity</Header>
      <Text>Covering Switzerland, Europe, Israel and US.</Text>
    </Cube>
  </Container>
);

export default Icons;
