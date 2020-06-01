import React, { ReactElement, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  ProfileInformation,
  Photo,
  PlayerInfo,
  IconsResult,
  Icon,
  Header,
} from './styles';

import devImg from '../../assets/images/player.png';
import trophy from '../../assets/images/trophy.png';
import skull from '../../assets/images/skull.png';
import logout from '../../assets/images/logout.png';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/authentication';

import ProfileDeckInfo from '../../components/ProfileDeckInfo';

interface PlayerData {
  id: number;
  name: string;
  wins: number;
  losses: number;
}

function Profile(): ReactElement {
  const [playerData, setPlayerData] = useState<PlayerData>();
  const { addToast } = useToast();
  const { signOut, userId } = useAuth();

  useEffect(() => {
    async function getPlayerData() {
      try {
        await api.get(`user/${userId}`).then((response) => setPlayerData(response.data));
      } catch (error) {
        addToast({
          title: 'Erro ao carregar os dados',
          description: 'Ocorreu um erro ao carregar dados, tente novamente.',
          type: 'error',
        });
      }
    }
    getPlayerData();
  }, [addToast, userId]);

  return (
    <Container>
      <Header>
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
                  <b>X</b>
                </span>
              </Icon>
            </IconsResult>
            <div>{playerData?.name}</div>
          </PlayerInfo>
        </ProfileInformation>
        <button type="button" onClick={() => signOut()}>
          <img src={logout} alt="Imagem de desligar" />
          sair
        </button>
      </Header>
      <ProfileDeckInfo />
      <Link to="/game">Jogar!</Link>
    </Container>
  );
}
export default Profile;
