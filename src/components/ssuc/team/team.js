import React from 'react';
import styled from 'react-emotion';

import Mike from './mike_baur';
import Manuel from './manuel_ebner';
import Michael from './michael_stucky';

const Spacer = styled.div`
  margin: 3em 0;
`;

const Team = () => (
  <>
    <Spacer />
    <Mike />
    <Spacer />
    <Manuel />
    <Spacer />
    <Michael />
    <Spacer />
  </>
);

export default Team;
