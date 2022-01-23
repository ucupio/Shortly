import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          More than just <br />
          Shorter links
        </SectionTitle>
        <SectionText>
        Build your brand's recognition and get detailed insights on how your links are performing.
        </SectionText>
        <Button onClick={props.handleClick}>Get Started</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;