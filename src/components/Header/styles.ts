import styled from 'styled-components';

export const Div = styled.div`
  padding: 50px 80px 50px 80px;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
  background: none;
`;
export const Button = styled.div`
  background-color: transparent;
  text-align: center;
  padding: 5px;
  border: 1px solid var(--shape);
  border-radius: 40px;
  color: var(--shape);
  width: 130%;
  :hover {
    color: black;
    background: var(--shape);
  }
`;
