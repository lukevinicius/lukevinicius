import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  background: #1c2025;

  b {
    color: var(--shape);
    font-size: 2rem;
  }
`;
export const Content = styled.div`
  padding: 1rem;
  border-left: 3px solid var(--background);
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(7, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  div {
    text-align: center;
    margin: 1rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    p {
      font-weight: bold;
      color: var(--shape);
      font-size: 1rem;
    }
  }
`;
