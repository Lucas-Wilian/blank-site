import styled, { css } from 'styled-components';
import { Github, Blogger, Youtube } from '../styles/Icons';
export const Container = styled.div`
  width: 80%;
  height: 660px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const iconsCSS = css`
  width: 35px;
  height: 35px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    color: var(----text-light);
  }
  span {
    font-size: 18px;
    text-align: center;
    color: var(--text);
  }
`;

export const Options = styled.div`
  width: 100%;
  height: inherit;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid var(--outline);
  width: 100%;
  span {
    color: var(--text);
    font-weight: bold;
    font-size: 20px;
    line-height: 60px;
  }
  .active {
    border-bottom: 3px solid var(--blue-primary);
    span {
      color: var(--text-light);
    }
  }
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(1) {
    margin-left: 0px;
  }

  &:nth-child(2) {
    margin-left: 35px;
  }

  &:nth-child(3) {
    margin-left: 35px;
  }
`;

export const IconBlog = styled(Blogger)`
  ${iconsCSS}
  fill: var(--orange-primary);
`;

export const IconYoutube = styled(Youtube)`
  ${iconsCSS}
  fill: var(--red-primary);
`;

export const IconGithub = styled(Github)`
  ${iconsCSS}
  fill: var(--purple-primary);
`;

export const NavOption = styled.div`
  background: var(--bg-secondary-darker);
  height: 100%;
  border-radius: 0 0 8px 8px;
`;
