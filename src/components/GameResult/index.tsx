import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { ResultContainer, BoxMessage } from './styles';

interface GameResultProps {
  winner: 'BUG' | 'JUNIOR' | null;
}

const GameResult: React.FC<GameResultProps> = ({ winner }) => {
  const [message, setMessage] = useState({ title: '', text: '' });

  useEffect(() => {
    if (winner === 'JUNIOR') {
      setMessage({
        title: 'Você venceu!',
        text: 'você derrotou o bug com um código limpo e escalável :D',
      });
    } else {
      setMessage({
        title: 'Você perdeu',
        text: 'você foi obrigado a fazer uma gambiarra em php :(',
      });
    }
  }, [winner]);

  return (
    <ResultContainer>
      <BoxMessage winner={winner}>
        <h1>{message.title}</h1>
        <span>{message.text}</span>
        <Link to="/profile">Voltar</Link>
      </BoxMessage>
    </ResultContainer>
  );
};

export default GameResult;
