import React from 'react';
// import Button from '../button/Button';
import * as C from './styles';

export const Options = ({
  title,
  text,
  comentario,
  avatar,
  name,
  profission,
  url,
}) => {
  return (
    <C.Container>
      <C.Nav>
        <C.Title>{title}</C.Title>
        <C.Text>{text}</C.Text>
        <button>Ir para o Blog</button>
        <C.User>
          <C.Comentario>"{comentario}"</C.Comentario>
          <C.UserInfo>
            <C.UserProfile>
              <C.IconPerson />
            </C.UserProfile>

            <C.Info>
              <h5>{name}</h5>
              <span>{profission}</span>
            </C.Info>
          </C.UserInfo>
        </C.User>
      </C.Nav>

      <C.Img>
        <img alt='img-post' src={url} />
      </C.Img>
    </C.Container>
  );
};

export default Options;
