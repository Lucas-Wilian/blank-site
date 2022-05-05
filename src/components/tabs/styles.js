import styled, { css } from 'styled-components';
import { Github, Blogger, Youtube } from '../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const TabList = styled.div`
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
    transition: all 0.5s;
    border-bottom: 1px solid var(--blue-primary);
    span {
      color: var(--text-light);
    }
  }
`;

export const TabContant = styled.div`
  background: var(--bg-secondary-darker);
  height: 100%;
  border-radius: 0 0 8px 8px;
  padding-bottom: 20px;
`;

const iconsCSS = css`
  width: 35px;
  height: 35px;
`;

export const TabHead = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-delay: 0.4s;
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
