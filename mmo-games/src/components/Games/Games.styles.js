import styled from 'styled-components';

export const Container = styled.div`
    background-color: #cfcfcf;
    width: 100%;
    margin: 0;

`;

export const CardGrid = styled.ul`
    margin: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;  
`;

export const Botao = styled.button`
  position: relative;
  left: 35%;
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