import * as C from './styles';
import { Header } from '../header/Header';
// import { Footer } from '../footer/Footer';

export const Theme = ({ children }) => {
  return (
    <C.Container>
      <Header />
      {children}
    </C.Container>
  );
};
