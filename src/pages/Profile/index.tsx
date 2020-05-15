import React, { ReactElement } from 'react';

import { Container } from './styles';

import Button from '../../components/Button';

function Profile(): ReactElement {
  return (
    <Container>
      <Button name="Oi Ude" width={70} height={30} onClick={() => alert('exemplo')} />
    </Container>
  );
}

export default Profile;
