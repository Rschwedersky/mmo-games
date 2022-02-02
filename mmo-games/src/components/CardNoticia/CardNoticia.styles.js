import styled from 'styled-components';

export const Card = styled.li`
    ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.main : theme.colors.secondary.light,
    backgroundColor: primary ? theme.colors.secondary.light : theme.colors.primary.light,
    })};
    width: 100%;
    
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    list-style-type: none;
    border-radius: 20px;
`;

export const Thumbnail = styled.div`
    width: 100%;
    overflow: hidden;  
`;

export const Description = styled.div`
    margin: 1.25rem 0 1rem;  
`;

export const Image = styled.img`
    width: 30%;
    overflow: hidden;
    border-radius: 20px;
      
`;

export const CardTitle = styled.h2`
    font-size: 1.5rem;
    ${({ primary, theme }) => ({
        color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
      })}; 
`;

export const Botao = styled.button`
  margin-left: 88%;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid #37474f;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;