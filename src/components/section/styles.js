import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 20px;
  height: 60vh;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 60%;
  padding: 10px;
  h1 {
    color: var(--text-light);
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    color: var(--text);
    font-size: 20px;
    margin-bottom: 20px;
    .active {
      color: var(--blue-primary-light-hover);
      font-weight: bold;
    }
  }
`;

export const ImagemBg = styled.div`
  display: flex;
  flex: 1;
  /* align-items: center; */
  justify-content: center;
  height: 100%;

  img {
    width: 300px;
    height: 300px;
  }
  /* border: 0; */
`;
