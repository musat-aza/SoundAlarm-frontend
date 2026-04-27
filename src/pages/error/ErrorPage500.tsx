import * as S from './ErrorPage.styles';

function ErrorPage500() {
  return (
    <S.Container>
      <S.Title>500</S.Title>
      <S.Description>서버 오류가 발생했습니다.</S.Description>
    </S.Container>
  );
}

export default ErrorPage500;
