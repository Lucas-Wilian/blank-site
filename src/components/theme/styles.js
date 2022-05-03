import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--bg-primary);
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
