import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import Button from '../../styles/GlobalComponents/Button';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#555" }}>
          <DiCssdeck size="3rem" /> <h2>Shortly</h2>
        </a>
      </Link>
    </Div1>
    <Div2 style={{alignItems: "center"}}>
      <li>
        <Link href="#features">
          <NavLink>Features</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#price">
          <NavLink>Pricing</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#resources">
          <NavLink>Resources</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
      <li style={{ marginRight: "3rem"}}>
        <Link href="#login">
          <NavLink>Login</NavLink>
        </Link>
      </li>
      <Button onClick={()=>console.log('logined')} alt="true">Sign Up</Button>
    </Div3>
  </Container>
);

export default Header;
