import styled from 'styled-components';

export const Div = styled.div``;
export const DivSecundary = styled.div`
  padding: 50px 80px 50px 80px;
  background: #121214;
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
`;
export const H2 = styled.h2`
  color: var(--shape);
`;
export const Input = styled.input`
  margin: 10px 0 10px 0;
  padding: 10px;
  width: 100%;
`;
export const TextArea = styled.textarea`
  margin: 10px 0 10px 0;
  padding: 10px;
  width: 100%;
`;
export const Button = styled.button`
  border-radius: 6px;
  padding: 10px;
  width: 140px;
  font-size: 15px;
  background-color: var(--shape);
  /* color: var(--shape); */
  border: 0px;
  margin-top: 15px;
  :hover {
    background-color: var(--background);
    transition: 0.3s;
  }
`;
