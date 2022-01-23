import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkItem href="#"><h2>Shortly</h2></LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Features</LinkTitle>
          <LinkItem href="#">Link Shortening</LinkItem>
          <LinkItem href="#">Branded Links</LinkItem>
          <LinkItem href="#">Analytics</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Resources</LinkTitle>
          <LinkItem href="#">
            Blog
          </LinkItem>
          <LinkItem href="#">
            Developers
          </LinkItem>
          <LinkItem href="#">
            Support
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Company</LinkTitle>
          <LinkItem href="google.com">
            About
          </LinkItem>
          <LinkItem href="google.com">
            Our Team
          </LinkItem>
          <LinkItem href="google.com">
            Careers
          </LinkItem>
          <LinkItem href="google.com">
            Contact
          </LinkItem>
        </LinkColumn>
        <SocialContainer>
          <SocialIcons href="https://google.com">
            <AiFillGithub size="3rem" color='#555' />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" color='#555' />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" color='#555' />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" color='#555' />
          </SocialIcons>
        </SocialContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
