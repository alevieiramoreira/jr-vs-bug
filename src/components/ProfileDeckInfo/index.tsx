import React, { useState, useCallback, ReactNode } from 'react';

import Card from '../Card';
import { ProfileDeckInfoContainer, Deck } from './styles';
import CardModal from './CardModal';

export interface CardData {
  name: string;
  description: string;
  imgUrl: string;
  manaPoints: number;
  damage: number;
  children?: ReactNode;
}

const ProfileDeckInfo: React.FC = () => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [cardToBeShown, setCardToBeShown] = useState<CardData>({} as CardData);

  const deckInfo = [
    {
      name: 'Carta do Café',
      description: 'Use esta carta para aumentar em 4 pontos de mana;',
      imgUrl: 'https://i.imgur.com/qCQdmvO.png',
      manaPoints: +4,
      damage: 0,
    },
    {
      name: 'Change Exp Jr Power',
      description:
        'Todos os Jrs se reuniram, cause 6 pontos de dano no BUG, perca 4 pontos de mana para utilizar este poder',
      imgUrl: 'https://i.imgur.com/pTYltoR.png',
      manaPoints: -4,
      damage: 6,
    },
    {
      name: ' Antivírus Ativo',
      description:
        'Opa parece que algo vinha para afetar seu sistema, mas seu antivírus não deu mole, recupera 2 pontos de Mana e também golpeie o bug em 2 pontos;',
      imgUrl: 'https://i.imgur.com/3yV7yxV.png',
      manaPoints: +2,
      damage: 2,
    },
    {
      name: 'Tech Lead Power',
      description:
        'As coisas ficaram difíceis? Use o poder do TechLead para conseguir gerar 8 pontos de dano no BUG, porém isso irá lhe custar 6 pontos de mana',
      imgUrl: 'https://i.imgur.com/ZV79Cik.png',
      manaPoints: -6,
      damage: 8,
    },
    {
      name: 'Framework ',
      description:
        'Você mostrou que um framework bem utilizado pode realizar milagres em poupar linhas de código. Gaste 3 pontos de mana, e gere um dano de 3 pontos de vida no Bug',
      imgUrl: 'https://i.imgur.com/vekhPge.png',
      manaPoints: -3,
      damage: 3,
    },
    {
      name: 'DEBUG',
      description:
        'Agora é hora de achar o bug que está escondido no código, vamos analisar linha a linha, mas vamos achar onde se esconde esse inseto maldito. Para isso gaste 6 pontos de mana, mas irá gerar um dano de 8 pontos no bug',
      imgUrl: 'https://i.imgur.com/Kqk0XFo.png',
      manaPoints: -6,
      damage: 8,
    },
    {
      name: 'STACK Trace',
      description:
        'Achamos uma stack trace, só pode estar por ai o bug que procuramos, para isso gaste 5 pontos de mana e gere um dano de 7 pontos no seu bug',
      imgUrl: 'https://i.imgur.com/NowVaoc.png',
      manaPoints: -5,
      damage: 7,
    },
    {
      name: 'Coffee Break ZUP',
      description:
        'Sim, está na hora de conversar com aquele seu amigo sobre o bug que está tentando resolver, essa carta irá te recuperar 2 pontos de mana, e irá gerar 2 pontos de dano no bug',
      imgUrl: 'https://i.imgur.com/y8xXHlS.png',
      manaPoints: +2,
      damage: 2,
    },
    {
      name: 'STACK OVERFLOW',
      description:
        'Se o Stack Overflow está conosco, quem estará contra? Você encontrou um post muito similar ao do Bug que estamos lutando, agora é com você. Gaste 4 de mana para jogar essa carta e então gere um dano de 4 pontos de vida no bug',
      imgUrl: 'https://i.imgur.com/TJI3o4x.png',
      manaPoints: -4,
      damage: 4,
    },
  ];

  const handleCardShow = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const newSelectedCard = deckInfo.find((card) => card.name === event.currentTarget.id);
      setShowCard(true);

      if (newSelectedCard) {
        setCardToBeShown(newSelectedCard);
      }
    },
    [deckInfo],
  );

  return (
    <>
      {showCard && (
        <CardModal>
          <Card
            width={120}
            height={160}
            key={cardToBeShown?.name}
            type="JUNIOR"
            name={cardToBeShown?.name}
            imgUrl={cardToBeShown?.imgUrl}
            description={cardToBeShown?.description}
            damage={cardToBeShown?.damage}
            manaPoints={cardToBeShown?.manaPoints}
            onClick={handleCardShow}
          />

          <div>
            <h1>{cardToBeShown?.name}</h1>
            <p>{cardToBeShown?.description}</p>
            <h2>
              uso de mana:&nbsp;
              {cardToBeShown?.manaPoints}
              &nbsp; dano causado:&nbsp;
              {cardToBeShown?.damage}
            </h2>

            <button type="button" onClick={() => setShowCard(false)}>
              Fechar
            </button>
          </div>
        </CardModal>
      )}
      <ProfileDeckInfoContainer>
        <h1>Antes de jogar, conheça seu deck:</h1>
        <Deck>
          {deckInfo.map((card) => (
            <Card
              width={120}
              height={160}
              key={card.name}
              type="JUNIOR"
              name={card.name}
              imgUrl={card.imgUrl}
              description={card.description}
              damage={card.damage}
              manaPoints={card.manaPoints}
              onClick={handleCardShow}
            />
          ))}
        </Deck>
      </ProfileDeckInfoContainer>
    </>
  );
};

export default ProfileDeckInfo;
