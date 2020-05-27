import React, { InputHTMLAttributes } from 'react';
import { InputElement } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  width: number;
  height: number;
}

const Input: React.FC<InputProps> = ({ placeholder, width, height, value, ...rest }) => {
  return (
    <InputElement placeholder={placeholder} width={width} height={height} value={value} {...rest} />
  );
};

export default Input;
