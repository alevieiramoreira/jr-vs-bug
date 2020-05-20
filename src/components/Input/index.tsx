import React, { ReactElement, Component } from 'react';
import { InputElement } from './styles';

interface Props {
  placeholder: string;
  width: number;
  height: number;
}

function Input({ placeholder, width, height }: Props): ReactElement {
  return <InputElement placeholder={placeholder} width={width} height={height} />;
}

export default Input;
