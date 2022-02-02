import styled from 'styled-components';

export const CardG = styled.li`
    ${({ primary, theme }) => ({
      color: primary ? theme.colors.primary.main : theme.colors.secondary.light,
      backgroundColor: primary ? theme.colors.secondary.light : theme.colors.primary.light,
    })};
    
    width: auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    list-style-type: none;
    border-radius: 20px;
`;

export const CardGTitle = styled.h2`
    font-size: 1.5rem;
    ${({ primary, theme }) => ({
        color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
      })}; 
`;

export const GamesP = styled.p`
${({ primary, theme }) => ({
    border: primary ? theme.colors.secondary.light : theme.colors.primary.light,
  })};
    font-size: 1.0rem;
    border-radius: 6px;
    padding: 10px;
    border: 2px solid ${props => props.theme.main}
`;

export const Thumbnail = styled.div`
    width: 100%;
    overflow: hidden;
`;
export const Image = styled.img`
    width: 360px;

`;
export const ShowMore = styled.button`
padding: 2px;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
  
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

