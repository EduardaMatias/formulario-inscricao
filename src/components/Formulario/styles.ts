import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  min-width: 30vw;
  background: #39383D;
  border-radius: 10px;
  padding: 35px;
  margin: auto 0;
  position: absolute; 
  top: 50%; 
  transform: translate(0, -50%);
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 36px;
  width: 300px;
  color: #c2c2c2;
  margin: 40px 0px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;
