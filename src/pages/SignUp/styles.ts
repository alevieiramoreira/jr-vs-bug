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

export const ButtonRegister = styled.div`
  button {
    margin-top: 25px;
    position: absolute;
    width: 600px;
    height: 51px;
    left: 164px;
    top: 425px;

    background: #fac60e;
    color: #000000;
    font-family: VT323;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 48px;
  }
`;
export const Title = styled.div`
  h1 {
    justify-content: center;
    font-style: normal;
    font-weight: 64px;
    font-size: 64px;
    line-height: 64px;
    color: #dcd5c6;
  }
`;
