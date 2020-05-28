import styled, { css } from 'styled-components';

interface InputProps {
  error?: string;
}

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 25px;
  }

  input {
    margin-bottom: 25px;
  }

  a {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 36px;
    color: #dcd5c6;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  width: 350px;
  height: 50px;
  background-color: #fac60e;
  text-align: center;
  font-size: 25px;

  &:hover {
    filter: brightness(80%);
  }

  &:active {
    filter: brightness(100%);
  }
`;

export const Input = styled.input<InputProps>`
  width: 350px;
  height: 50px;
  padding-left: 20px;
  background: #252129;
  border: 2px solid #000000;
  color: #dcd5c6;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  &:focus {
    border-color: #fac60e;
  }

  ${(props) =>
    !!props.error &&
    css`
      border-color: red;
    `}
`;
