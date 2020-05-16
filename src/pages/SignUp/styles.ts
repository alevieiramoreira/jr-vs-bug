import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: #000000;
  }
`;

export const ButtonRegister = styled.div`
  button {
    margin-top: 25px;
    position: absolute;
    width: 449px;
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

export const LinkRegister = styled.div`
  a {
    position: absolute;
    margin-top: 25px;
    width: 260px;
    height: 36px;
    left: 254px;
    top: 500px;

    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 36px;
    color: #dcd5c6;
  }
`;

export const Title = styled.div`
  h1 {
    position: absolute;
    width: 257px;
    height: 64px;
    left: 255px;
    top: 100px;
    font-style: normal;
    font-weight: 64px;
    font-size: 64px;
    line-height: 64px;
    color: #dcd5c6;
  }
`;
