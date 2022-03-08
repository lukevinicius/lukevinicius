import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem 4rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
  background: linear-gradient(270deg, #09090a, #121214);

  h2 {
    text-align: center;
    margin: 25px;
    color: var(--shape);
  }
`;
