import styled, { css } from 'styled-components';
import { MoonStars, Ghost, Github } from '../styles/Icons';

export const Container = styled.div`
  height: 90px;
  width: 100%;
  padding: 20px 10px;
`;

const iconsCSS = css`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: var(--gray);
  flex-shrink: 0;
  &:hover {
    fill: var(--text);
  }
  &.active {
    fill: var(--blue-primary);
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  span {
    color: var(--white);
    font-weight: bold;
    font-size: 25px;
    margin-left: 10px;
  }
`;

export const IconLogo = styled(Ghost)`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  > path {
    fill: var(--blue-primary);
  }
`;

export const Nav = styled.div`
  display: flex;

  ul {
    list-style: none;
    border-right: 1px solid var(--outline);
  }
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      color: var(--text);
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: var(--blue-primary);
      }
    }
  }
`;

export const IconContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-evenly;
`;

export const IconTheme = styled(MoonStars)`
  ${iconsCSS}
`;

export const IconGitHub = styled(Github)`
  ${iconsCSS}
`;
