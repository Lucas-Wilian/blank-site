import React from 'react';
import imgSection from '../../assets/imgsection.png';
import * as C from './styles';

export const Section = () => {
  return (
    <C.Container>
      <C.Section>
        <C.Title>
          <h1>Quem somos? Somos apenas a BLANK...</h1>
          <p>
            <span className='active'>BLANK</span> e uma Startup que tem como
            pricipal objetivo transmitir o conhecimento através da programação e
            suas principais tecnologias. Ficou curioso e gostaria de saber mais?
            Então fique à vontade para navegar pelo site.
          </p>
          <button>Começar</button>
        </C.Title>
        <C.ImagemBg>
          <img alt='img_log' src={imgSection} />
        </C.ImagemBg>
      </C.Section>
    </C.Container>
  );
};
