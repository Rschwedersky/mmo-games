import styled from 'styled-components';

export const SlideShowConteiner = styled.div`
${({ primary, theme }) => ({
    color: primary ? theme.colors.primary.dark : theme.colors.secondary.main,
    backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.dark,
  })};
  `;

export const SlideShowIndicator = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 10px;
  `;

export const SlideShowImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
  `;