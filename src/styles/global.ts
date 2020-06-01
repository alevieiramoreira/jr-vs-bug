import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #261F2E;
    color: #DCD5C6;
    -webkit-font-smoothing: antialiased;

  }

  button {
    cursor: pointer;
    border: none;
    position: relative;

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
  }

  body, input, button {
    font: 16px VT323, sans-serif;
  }


  ::-moz-selection {
      color: #DCD5C6;
      background: #cb0c79;
    }

    ::selection {
      color: #DCD5C6;
      background: #cb0c79;
    }
`;
