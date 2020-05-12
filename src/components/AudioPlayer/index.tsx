import React, { ReactElement } from 'react';

import { Container } from './styles';

const musicTheme = require('../../assets/music/music.mp4');

interface AudioPlayerProps extends HTMLAudioElement {
  audioName?: string;
}

function AudioPlayer(): ReactElement {
  return (
    <Container>
      <audio src={musicTheme} autoPlay loop controls>
        <track kind="captions" />
      </audio>
    </Container>
  );
}

export default AudioPlayer;
