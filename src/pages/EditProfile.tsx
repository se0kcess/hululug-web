import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
`;

export default function EditProfile() {
  return (
    <Container>
      <h1>EditProfile</h1>
    </Container>
  );
}