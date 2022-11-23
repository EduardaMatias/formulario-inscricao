import styled from "styled-components";

export const Loading = styled.div`
  display: block;
  position: relative;

  :after {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    margin: 8px;
    border-radius: 50%;
    border: 2px solid #854a01;
    border-color: #854a01 transparent #854a01 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
