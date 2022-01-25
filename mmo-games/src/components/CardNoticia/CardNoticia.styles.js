import styled from 'styled-components';

export const Card = styled.li`
    width: 90%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    background-color: white;
    list-style-type: none;
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
`;

export const CardTitle = styled.h2`
    font-size: 1.5rem;
    color: #436147;
    text-align: center;  
`;

export const Botao = styled.button`
  margin-right: 1px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid #37474f;
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;