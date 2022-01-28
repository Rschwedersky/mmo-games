import styled from 'styled-components';

export const Container = styled.ul`
    background-color: #cfcfcf;
    
    max-width: 960px;
    margin: 0 20%;
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