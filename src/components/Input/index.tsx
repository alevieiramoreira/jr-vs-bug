import React, { ReactElement, InputHTMLAttributes } from 'react';
import { InputElement } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  width: number;
  height: number;
}

function Input({ placeholder, width, height, value, ...rest }: Props): ReactElement {
  return (
    <InputElement placeholder={placeholder} width={width} height={height} value={value} {...rest} />
  );
}

export default Input;
