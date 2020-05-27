import React, { ReactElement } from 'react';

import { Container, Console, ProfileInformation, Photo, PlayerInfo } from './styles';

import Button from '../../components/Button';
import devImg from '../../assets/images/player.png';

function Profile(): ReactElement {
  return (
    <Container>
      <ProfileInformation>
        <Photo>
          <img src={devImg} alt="seu avatar, imagem em estilo 8 bit" />
        </Photo>
        <PlayerInfo>
          <div>Trofeu 10X x1</div>
          <div>Suzana Furacao</div>
        </PlayerInfo>
      </ProfileInformation>
      <Console>_> Textinho de terminal</Console>
      <Button name="Jogar!" width={200} height={51} onClick={() => alert('exemplo')} />
    </Container>
  );
}
export default Profile;
