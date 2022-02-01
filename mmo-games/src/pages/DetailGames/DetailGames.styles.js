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
    position: absolute;
    z-index: 2;
    padding: 10px;
     
`;

export const DetailDescricao = styled.h3`
${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
    font-size: 1.7rem;
    
    padding: 10px;
     
`;

export const DetailP = styled.p`
${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
    font-size: 1.2rem;
    
    padding: 10px;
     
`;
export const DetailP2 = styled.p`
${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.dark,
    border: primary ? theme.colors.secondary.dark : theme.colors.primary.dark,
  })};
    font-size: 1.2rem;
    border-radius: 6px;
    padding: 10px;
    border: 2px solid ${props => props.theme.main}
`;


export const DetailImagePrincipal = styled.img`
  cursor: pointer;
  padding: 10px;
  text-align: center;
  border: 1px #666 solid
`;

export const MinimumSystemRequirements = styled.ul`
padding: 30px;
text-align: center;
list-style-type: none;
border-radius: 6px;
`;

export const ItemLista = styled.li`
${({ primary, theme }) => ({
  color: primary ? theme.colors.primary.dark : theme.colors.secondary.dark,
})};
padding: 17px;
font-size: 1.2rem;
`;

export const ComentariosConteiner = styled.div`
padding: 50px;
`;