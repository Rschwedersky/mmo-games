import styled from 'styled-components';

export const Paginacao = styled.div`
  ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BotaoPaginacao = styled.button`
padding: 3px;
margin: 3px;
background-color: ${({ theme }) => theme.colors.secondary.main};
cursor: pointer;
color: ${({ theme }) => theme.colors.primary.main};
border: 2px solid #37474f;
border-radius: 6px;
&:hover {
  background-color: ${({ theme }) => theme.colors.secondary.dark};
}
`;

export const InputBusca = styled.input`
  padding: 0.4rem 5rem;
  font-size: 1.25rem;
  margin: 1rem 0;
  background-color:#cfcfcf;
  border-radius: 50px  
`;