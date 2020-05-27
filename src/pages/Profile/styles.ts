import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-left: 20px;
  padding-top: 20px;
  flex-direction: column;

  a {
    margin-top: 50px;
    align-self: center;
    font-size: 25px;
    width: 115px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    background-color: #fac60e;

    &:hover {
      filter: brightness(80%);
    }
  }

  button {
    position: absolute;
    top: 25px;
    right: 25px;
    padding: 4px;
    width: 70px;
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  width: 400px;
  height: 120px;
  background-color: #7b1346;
  padding: 0px 15px;
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
  }

  b {
    align-self: center;
  }
`;

export const IconsResult = styled.div`
  display: flex;
`;
