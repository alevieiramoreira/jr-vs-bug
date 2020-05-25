import React, { ReactElement, useState, useEffect } from 'react';

import { ResultContainer, BoxMessage } from './styles';

interface GameResultProps {
  winner: 'bug' | 'junior' | null;
}

function GameResult({ winner }: GameResultProps): ReactElement {
  const [message, setMessage] = useState({ title: '', text: '' });

  useEffect(() => {
    if (winner === 'junior') {
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
      </BoxMessage>
    </ResultContainer>
  );
}

export default GameResult;
