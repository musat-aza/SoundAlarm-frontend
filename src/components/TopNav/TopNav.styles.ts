import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 3.5rem;
  padding: 0 ${({ theme }) => theme.gaps.GeneralMargin};
  background: ${({ theme }) => theme.colors.grayScale.white};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.grayScale.gray100};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.heading.h2}
  margin: 0;
  color: ${({ theme }) => theme.colors.grayScale.black};
`;
