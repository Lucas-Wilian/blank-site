import React from 'react';
import * as C from './styles';

export const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Logo>
          <C.IconLogo />
          <span>BLANK</span>
        </C.Logo>
        <C.Nav>
          <ul>
            <li>
              <a>Portifolio</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
          <C.IconContainer>
            <C.IconTheme className='active' />
            <C.IconGitHub />
          </C.IconContainer>
        </C.Nav>
      </C.Header>
    </C.Container>
  );
};
