import styled from 'styled-components';

function HomePage() {
  return <Title>SoundAlarm</Title>;
}

const Title = styled.h2`
  ${({ theme }) => theme.fonts.heading.h1}
  margin: 0;
  color: ${({ theme }) => theme.colors.grayScale.black};
`;

export default HomePage;
