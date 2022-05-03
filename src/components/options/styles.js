import styled from 'styled-components';
import { Person } from '../styles/Icons';

export const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  padding: 0px 20px;
`;

export const Nav = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 25px;
  margin: 20px 0;
`;

export const Text = styled.div`
  color: var(--text);
  margin: 20px 0;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Comentario = styled.div`
  font-size: 16px;
  font-style: italic;
  width: 100%;
  margin: 15px 0;
`;

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  /* flex-direction: column; */
`;

export const UserProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 2px var(--blue-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const Img = styled.div`
  width: 50%;
`;
export const IconPerson = styled(Person)`
  height: 40px;
  width: 40px;
`;
