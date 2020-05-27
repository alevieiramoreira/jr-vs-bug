import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  width: 100%;

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
    font-size: 20px;
    line-height: 36px;
    color: #dcd5c6;
    text-decoration: none;
  }

  input {
    margin-bottom: 25px;
  }
  div {
    display: flex;
    width: 400px;
    height: 760px;
    align-items: center;

    img {
      width: 400px;
      height: 250px;
    }
  }
`;
