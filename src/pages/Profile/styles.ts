import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  flex-direction: column;

  a {
    margin-top: 50px;
    align-self: center;
    font-size: 25px;
    width: 155px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    color: #fff;
    background-color: #deb304;
    box-shadow: inset -4px -4px 0px 0px #d48900;

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

    &:hover {
      background-color: #d48900;
      box-shadow: inset -4px -4px 0px 0px #915e00;
    }

    &:active {
      background-color: #deb304;
    }
  }
`;

export const Header = styled.header`
  margin: 20px;

  button {
    display: flex;
    position: absolute;
    top: 25px;
    right: 25px;
    padding: 5px;
    width: 80px;
    color: #fff;
    background-color: #911114;
    box-shadow: inset -2px -2px 0px 0px #6e0306;

    &:hover {
      background-color: #6e0306;
      box-shadow: inset -4px -4px 0px 0px #570002;
    }

    img {
      width: 15px;
      margin-right: 15px;
    }
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  width: 400px;
  height: 120px;
  background-color: #7b1346;
  padding: 0px 15px;
  box-shadow: inset -4px -4px 0px 0px #4d0227;
`;

export const Photo = styled.div`
  display: flex;
  width: 120px;
  height: 120px;

  img {
    align-self: center;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 3px solid #22a1b3;
  }
`;

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
  justify-content: space-around;
  font-size: 20px;
`;

export const Icon = styled.div`
  display: flex;

  img {
    height: 30px;
    margin: 0 10px;
  }

  b {
    align-self: center;
  }
`;

export const IconsResult = styled.div`
  display: flex;
`;
