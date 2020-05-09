import React, { ReactElement } from 'react';

import Card from '../../components/Card';
import { Container } from './styles';

function SignUp(): ReactElement {
  return (
    <Container>
      <Card type="bug" />
      <Card type="player" />
    </Container>
  );
}

export default SignUp;
