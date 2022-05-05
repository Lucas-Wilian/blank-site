import React, { useState } from 'react';
import * as C from './styles';
import Options from '../options/Options';
import blogImg from '../../assets/dev-coding-discover.webp';
import youtubeImg from '../../assets/Youtube-logo-vector-PNG.png';
import githubImg from '../../assets/Octocat.png';
export const Tabs = () => {
  const [index, setIndex] = useState(0);
  return (
    <C.Container>
      <C.TabList>
        <C.TabHead
          className={`${index === 0 ? 'active' : ''}`}
          onClick={() => setIndex(0)}
        >
          <C.IconBlog />
          <span>Blog</span>
        </C.TabHead>
        <C.TabHead
          className={`${index === 1 ? 'active' : ''}`}
          onClick={() => setIndex(1)}
        >
          <C.IconYoutube />
          <span>Tutoriais</span>
        </C.TabHead>
        <C.TabHead
          className={`${index === 2 ? 'active' : ''}`}
          onClick={() => setIndex(2)}
        >
          <C.IconGithub />
          <span>Códigos</span>
        </C.TabHead>
      </C.TabList>

      <C.TabContant hidden={index !== 0}>
        <Options
          title='Venha conferir nossos principais postagens que podem lhe ajudar'
          text='Só aqui você encotra as melhores post sobre programação que talves podem ajudar você nesse momento de dificuldade'
          comentario='Eu já vi muitos sites e blogges pela internet mais nenhum se compara com esse, e muito fluido e o atendimento e muito bom sou muito fã dessa plataforma e espero que ela continue crescendo '
          avatar='...'
          name='Lucas Wilian'
          profission='Desenvolvedor de Softwares'
          url={blogImg}
        />
      </C.TabContant>
      <C.TabContant hidden={index !== 1}>
        <Options
          title='Confira nosso último vídeo!'
          text='Se você ainda está com alguma dúvida, venha conferir alguns tutorias para facilitar no seu aprendizado'
          comentario='Desde de que eu comecei a vê os videos tutorias eu gostei bastante pois me ajudou a desenvolver muito mais minhas habilidades com programação.'
          avatar='...'
          name='L . Wilian'
          profission='Programador Full-Stack'
          url={youtubeImg}
        />
      </C.TabContant>
      <C.TabContant hidden={index !== 2}>
        <Options
          title='Encontrou alguma duvida no seu codigo fonte? Aqui voce encontra a solução'
          text='Ta com algum bug ou seu codigo não tá funcionando do jeito que você queria, confira alguns dos nossos repositorios que podem ajudar a corrigir ou te motivar a criar um novo projeto'
          comentario='Eu tava com alguns bugs no meu codigo, seguia o tutorial igualzinho e mesmo assim não dava certo, então resolvi ver o codigo fonte e resolvi esse bug'
          avatar='...'
          name='Lucas W'
          profission='Programador Back-End'
          url={githubImg}
        />
      </C.TabContant>
    </C.Container>
  );
};
