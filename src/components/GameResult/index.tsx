import React, { ReactElement, useState, useEffect } from 'react';

import { ResultContainer, BoxMessage } from './styles';

interface GameResultProps {
  result: 'playerWin' | 'bugWin' | 'playing';
}

function GameResult({ result }: GameResultProps): ReactElement {
  const [message, setMessage] = useState({ title: '', text: '' });

  useEffect(() => {
    if (result === 'playerWin') {
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
  }, [result]);

  return (
    <ResultContainer>
      <BoxMessage result={result}>
        <h1>{message.title}</h1>
        <span>{message.text}</span>
      </BoxMessage>
    </ResultContainer>
  );
}

export default GameResult;
