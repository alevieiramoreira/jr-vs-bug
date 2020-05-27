import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-self: center;
  margin-top: 45px;
  width: 520px;
  height: 250px;
  background: #e5e5e5;
  box-shadow: 0px 2px 0px 0px #e5e5e5;
  padding-top: 25px;

  div {
    display: flex;
    flex-direction: column;
    padding: 5px;

    span {
      display: inline-block;
      margin-bottom: 15px;

      strong {
        margin-left: 5px;
      }
    }

    background-color: #222;
    width: 100%;
    font-weight: 600;
  }
`;
