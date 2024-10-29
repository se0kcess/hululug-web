import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { BodyText, Title1 } from '@/styles/Typography';

interface IntroductionProps {
  title: string;
  content: string;
}

export const Title = styled(Title1)`
  width: 327px;
`;

export const Container = styled(BodyText)`
  width: 327px;
  height: auto;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${theme.colors.gray[50]};
`;

const Introduction = ({ title, content }: IntroductionProps) => {
  return (
    <>
      <Title>{title === '' ? '제목이 없습니다.' : title}</Title>
      <Container>{content === '' ? '소개글이 없습니다.' : content}</Container>
    </>
  );
};

export default Introduction;