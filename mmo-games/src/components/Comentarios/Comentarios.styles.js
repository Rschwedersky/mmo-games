import styled from 'styled-components';

export const Botao = styled.button`
  margin-left: 0%;
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

export const Model = styled.div`
${({ primary, theme }) => ({
  color: primary ? theme.colors.primary.main : theme.colors.secondary.main,
  backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.main,
})};
  z-index: auto;
	display: ${({show}) => (show ? 'block' : 'none')};
  border-radius: 3px;
  border: 2px solid #37474f;
	top: 20%;
	left: 20%;
`;

export const Card = styled.li`
    ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.main : theme.colors.secondary.light,
    backgroundColor: primary ? theme.colors.secondary.light : theme.colors.primary.light,
    })};
    width: 100%;
    border: 1px solid #37474f;
    padding: 1rem;
    list-style-type: none;
    border-radius: 20px;
`;
