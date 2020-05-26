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
