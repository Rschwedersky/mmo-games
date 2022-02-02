import styled from 'styled-components';

export const Card = styled.div`
    ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.main : theme.colors.secondary.light,
    backgroundColor: primary ? theme.colors.secondary.light : theme.colors.primary.light,
    })};
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    
`;

export const Thumbnail = styled.div`
    width: 100%;
    overflow: hidden;
    display:flex;  
`;

export const Description = styled.div`
    margin: 1.25rem 0 1rem;
    font-size: 1.8rem;  
`;

export const Image = styled.img`
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
      
`;

export const CardTitle = styled.span`
${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    left: primary ?'0px' : '-80px',
  })};
    position: relative;
    font-size: 2.8rem;
    line-height: 1.5em;
    bottom: -60px;
    z-index:2; 
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