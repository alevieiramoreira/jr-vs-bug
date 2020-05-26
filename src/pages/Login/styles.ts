import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  h1 {
    margin-bottom: 25px;
  }

  form {
    margin-right: 100px;
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
