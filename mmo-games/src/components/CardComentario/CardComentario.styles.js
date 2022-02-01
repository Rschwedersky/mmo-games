import styled from 'styled-components';

export const Comentario = styled.p`
${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main ,
    border: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
    margin: 20px;
    font-size: 1.7rem;
    border-radius: 6px;
    padding: 20px;
    
`;
