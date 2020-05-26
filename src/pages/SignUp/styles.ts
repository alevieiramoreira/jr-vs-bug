import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  width: 700px;

  h1 {
    margin-bottom: 25px;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  a {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    color: #dcd5c6;
    text-decoration: none;
  }

  input {
    margin-bottom: 25px;
  }
`;
