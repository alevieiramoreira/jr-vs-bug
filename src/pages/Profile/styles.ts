import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-left: 20px;
  padding-top: 20px;
  flex-direction: column;

  button {
    margin-top: 50px;
    align-self: center;
    font-size: 25px;
  }
`;
export const Console = styled.div`
  width: 550px;
  height: 300px;
  display: flex;
  margin-top: 50px;
  background-color: black;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: #1cff40;
  font-size: 18px;
`;

export const ProfileInformation = styled.div`
  display: flex;
  width: 400px;
  height: 120px;
  background-color: #7b1346;
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
  margin: 10px;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;
`;
