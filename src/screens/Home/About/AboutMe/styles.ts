import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
