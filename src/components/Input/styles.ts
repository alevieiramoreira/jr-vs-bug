import styled from 'styled-components';

interface Props {
  placeholder: string;
  width: number;
  height: number;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  height: 50px;
  justify-content: center;
`;

export const InputElement = styled.input<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding-left: 20px;
  background: #252129;
  border: 2px solid #000000;
  color: #dcd5c6;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
`;
