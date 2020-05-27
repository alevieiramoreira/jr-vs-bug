import React, { ReactElement, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, ProfileInformation, Photo, PlayerInfo, IconsResult, Icon } from './styles';
import { PlayerData } from '../../@types/game';

import devImg from '../../assets/images/player.png';
import trophy from '../../assets/images/trophy.png';
import skull from '../../assets/images/skull.png';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/authentication';

import ConsoleScreen from '../../components/ConsoleScreen';

function Profile(): ReactElement {
  const [playerData, setPlayerData] = useState<PlayerData>();
  const { addToast } = useToast();
  const { signOut } = useAuth();

  useEffect(() => {
    async function getPlayerData() {
      try {
        await api.get('/profile').then((response) => setPlayerData(response.data));
      } catch (error) {
        addToast({
          title: 'Erro ao carregar os dados',
          description: 'Ocorreu um erro ao carregar dados, tente novamente.',
          type: 'error',
        });
      }
    }
    getPlayerData();
  }, [addToast]);

  return (
    <Container>
      <ProfileInformation>
        <Photo>
          <img src={devImg} alt="seu avatar, imagem em estilo 8 bit" />
        </Photo>
        <PlayerInfo>
          <IconsResult>
            <Icon>
              <img src={trophy} alt="Troféu em pixel art" />
              <span>
                {playerData?.wins}
                <b>X</b>
              </span>
            </Icon>
            <Icon>
              <img src={skull} alt="Troféu em pixel art" />
              <span>
                {playerData?.losses}
                <b>20 X</b>
              </span>
            </Icon>
          </IconsResult>
          <div>aaaaaa</div>
        </PlayerInfo>
      </ProfileInformation>
      <button type="button" onClick={() => signOut()}>
        logout
      </button>
      <ConsoleScreen> Textinho de terminal</ConsoleScreen>
      <Link to="/game">Jogar!</Link>
    </Container>
  );
}
export default Profile;
