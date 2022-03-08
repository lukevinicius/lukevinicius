import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem 4rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
  background-color: #121214;

  h2 {
    color: var(--shape);
    text-align: center;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  div {
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid #fff;
    margin-top: 2rem;
    text-align: center;

    img {
      height: 4rem;
    }

    p {
      margin-top: 1rem;
      color: var(--shape);
      text-align: justify;

      a {
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`;
