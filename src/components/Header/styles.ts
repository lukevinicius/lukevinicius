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
  padding: 15px;
  border: 1px solid var(--shape);
  border-radius: 40px;
  :hover {
    background-color: var(--shape);
    color: '#131415';
  }
`;
