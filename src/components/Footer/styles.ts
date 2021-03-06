import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 2.5rem 4rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
  background: #121214;

  a {
    margin: 0.5rem;
    color: var(--shape);
  }
`;
