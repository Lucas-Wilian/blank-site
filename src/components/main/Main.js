import React from 'react';
import * as C from './styles';
import { Tabs } from '../tabs/Tabs';

export const Main = () => {
  return (
    <C.Container>
      <C.Title>
        <h3>Está em dúvida sobre alguma tecnologia e não sabe o que fazer?</h3>
        <span>Pois você está no lugar certo amigo</span>
      </C.Title>

      <Tabs />
    </C.Container>
  );
};
