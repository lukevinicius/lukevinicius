import styled from 'styled-components';

export const Div = styled.div`
  padding: 2.5rem 4rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
  background: linear-gradient(270deg, #09090a, #121214);
`;
export const DivTech = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  background: #1c2025;
`;
export const Border = styled.div`
  padding: 1rem;
  border-left: 3px solid var(--background);
`;
