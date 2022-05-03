import React from 'react';
import * as C from './styles';
import Options from '../options/Options';

export const Main = () => {
  return (
    <C.Container>
      <C.Title>
        <h3>Está em dúvida sobre alguma tecnologia e não sabe o que fazer?</h3>
        <span>Pois você está no lugar certo amigo</span>
      </C.Title>
      <C.Options>
        <C.Header>
          <C.NavHeader className='active'>
            <C.IconBlog />
            <span>Blog</span>
          </C.NavHeader>
          <C.NavHeader>
            <C.IconYoutube />
            <span>Tutoriais</span>
          </C.NavHeader>
          <C.NavHeader>
            <C.IconGithub />
            <span>Códigos</span>
          </C.NavHeader>
        </C.Header>
        <C.NavOption>
          <Options
            title='Venha conferir nossos principáis postagens que podem lhe ajudar'
            text='Só aqui você encotra as melhores post sobre programação que talves podem ajudar você nesse momento de dificuldade'
            comentario='Eu já vi muitos sites e blogges pela internet mais nenhum se compara com esse, e muito fluido e o atendimento e muito bom sou muito fã dessa plataforma e espero que ela continue crescendo '
            avatar='...'
            name='Lucas Wilian'
            profission='Desenvolvedor de Softwares'
          />
        </C.NavOption>
      </C.Options>
    </C.Container>
  );
};
