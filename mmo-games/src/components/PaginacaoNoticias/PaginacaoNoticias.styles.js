import styled from 'styled-components';

export const Paginacao = styled.div`
  ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
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
  padding: 0.5% 10%;
  font-size: 1.25rem;
  margin: 1rem 0;
  background-color:#cfcfcf;
  border-radius: 50px  
`;

export const Controles = styled.div`
${({ primary, theme }) => ({
  color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
  backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
})};
  display: block;
  font-size: 1.17em;
    text-align: center;  
`;