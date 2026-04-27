import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 4rem;
  padding: ${({ theme }) => theme.gaps.S} ${({ theme }) => theme.gaps.GeneralMargin};
  background: ${({ theme }) => theme.colors.grayScale.white};
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.grayScale.gray100};
`;

export const NavItem = styled(NavLink)`
  ${({ theme }) => theme.fonts.body.m500}
  color: ${({ theme }) => theme.colors.grayScale.gray700};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.primary.VT500};
  }
`;
