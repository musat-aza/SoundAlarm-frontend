import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.grayScale.gray50};
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: ${({ theme }) => theme.generalViewport};
  margin: 0 auto;
  padding: ${({ theme }) => theme.gaps.GeneralMargin};
`;
