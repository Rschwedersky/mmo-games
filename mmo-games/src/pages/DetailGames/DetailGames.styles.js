import styled from 'styled-components';

export const ConteinerH2 = styled.div`
  display: flex;
  align-items: left;
`;

export const DetailTitle = styled.h2`
${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
    font-size: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-right-radius: 17px;
   
    padding: 10px;
   
    
`;
export const DetailImagePrincipal = styled.img`
    width: 100%;
    border-radius: 20px;
    border-top-left-radius: 0;
`;