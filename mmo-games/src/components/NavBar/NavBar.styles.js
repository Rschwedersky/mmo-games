import styled from 'styled-components';

export const NavBar = styled.nav`
  ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ConteinerBotao = styled.div`
  display: flex;
  align-items: center;
`;

export const Botao = styled.button`
  margin-right: 1px;
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
export const AppTitle = styled.h1`
${({ primary, theme }) => ({
  color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
  backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
})};
    font-size: 1.8rem;
    text-align: center;  
`;