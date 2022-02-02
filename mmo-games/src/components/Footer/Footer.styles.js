import styled from 'styled-components';

export const FooterStyle = styled.nav`
  ${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;