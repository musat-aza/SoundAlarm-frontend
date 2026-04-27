import * as S from './BtmNav.styles';

function BtmNav() {
  return (
    <S.Container aria-label="하단 네비게이션">
      <S.NavItem to="/">홈</S.NavItem>
    </S.Container>
  );
}

export default BtmNav;
