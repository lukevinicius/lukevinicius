import styled from 'styled-components';

export const Div = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 2.5rem 4rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
  background: none;
`;
export const Button = styled.div`
  background-color: transparent;
  text-align: center;
  padding: 5px;
  border: 1px solid var(--shape);
  border-radius: 2.5rem;
  color: var(--shape);
  width: 130%;
  :hover {
    color: black;
    transition: 0.3s;
    background: var(--shape);
  }
`;
