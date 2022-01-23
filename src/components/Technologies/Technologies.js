import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech" style={{alignItems: 'center'}}>
    <SectionTitle>Advance Statistics</SectionTitle>
    <SectionText>
      Track how your links are performing across the web with our advanced statistics dashboard.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Brand Recognition</ListTitle>
          <ListParagraph>
            Boost your brand recognition with<br />
            each click. Generic links don't mean a
            thing. Branded links help instil 
            confidence in your content.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Detailed Records</ListTitle>
          <ListParagraph>
            Gain insight into who is clicking your
            links. Knowing when and where
            people engage with your content
            helps inform better decisions
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Fully Customizable</ListTitle>
          <ListParagraph>
            Improve brand awareness and<br />
            content discoverability through<br />
            customizable links, supercharging<br />
            audiance engagement
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
