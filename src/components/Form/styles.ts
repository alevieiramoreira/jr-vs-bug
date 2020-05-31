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
  color: #fff;
  background-color: #deb304;
  text-align: center;
  position: relative;
  font-size: 25px;
  box-shadow: inset -4px -4px 0px 0px #d48900;
  /* border-top: 4px black solid;
  border-bottom: 4px black solid; */

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &:before {
    top: -4px;
    left: 0;
    border-top: 4px black solid;
    border-bottom: 4px black solid;
  }

  &:after {
    left: -4px;
    top: 0;
    border-left: 4px black solid;
    border-right: 4px black solid;
  }

  &:hover {
    background-color: #d48900;
    box-shadow: inset -4px -4px 0px 0px #915e00;
  }

  &:active {
    background-color: #deb304;
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
