import React, { ReactElement } from 'react';

import { AudioPlayerContainer } from './styles';

const musicTheme = require('../../assets/music/music.mp4');

interface AudioPlayerProps extends HTMLAudioElement {
  audioName?: string;
}

function AudioPlayer(): ReactElement {
  return (
    <AudioPlayerContainer>
      <audio src={musicTheme} autoPlay loop controls>
        <track kind="captions" />
      </audio>
    </AudioPlayerContainer>
  );
}

export default AudioPlayer;
