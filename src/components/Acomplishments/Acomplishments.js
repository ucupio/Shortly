import React from 'react';
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section style={{alignItems: 'center'}}>
    <SectionTitle>Boost Your Link Today</SectionTitle>
    <Button onClick={()=>console.log('logined')} alt="true">Get Started</Button>
  </Section>
);

export default Acomplishments;
