import React, { ReactElement } from 'react';

// import { Container } from './styles';

interface StatusBarProps {
  manaPoints: number;
  healthPoints: number;
}

function StatusBar(): ReactElement {
  return (
    <div>
      <span>iconezinho </span>
    </div>
  );
}

export default StatusBar;
