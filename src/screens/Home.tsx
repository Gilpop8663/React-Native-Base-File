import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text``;

export default function Home() {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
}
