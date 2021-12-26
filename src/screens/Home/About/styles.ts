import styled from 'styled-components';

export const Div = styled.div`
  padding: 50px 80px 50px 80px;
  @media screen and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
  background: linear-gradient(270deg, #09090a, #121214);
`;
export const DivTech = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
  background: #1c2025;
`;
export const Border = styled.div`
  padding: 20px;
  border-left: 3px solid var(--background);
`;
