import styled from 'styled-components';

export const PaginacaoGamesStyle = styled.div`
  ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};

 
  
  border-bottom-right-radius:20px
  
  
  
  
`;

export const BotaoPaginacaoI = styled.button`
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

export const InputBuscaI = styled.input`

padding: 7px ;
  font-size: 1.25rem;
  margin: 1rem;
  background-color:#cfcfcf;
  border-radius: 10px  
`;

export const ControlesI = styled.div`
${({ primary, theme }) => ({
  color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
  backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
})};
  display: block;
  font-size: 1.17em;
    text-align: center;  
`;