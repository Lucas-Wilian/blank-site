import * as C from './styles';

import { Theme } from '../theme/theme';
import { Section } from '../section/Section';
import { Main } from '../main/Main';

export const Layout = () => {
  return (
    <Theme>
      <C.Container>
        <Section />
        <C.Wrapper>
          <Main />
        </C.Wrapper>
      </C.Container>
    </Theme>
  );
};
