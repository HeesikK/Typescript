import React from "react";
import styled from "styled-components";
import HSButton from "./button";
import CloseIcon from "../assets/5003-512.webp";

const Modal: React.FC = () => {
  return (
    <Wrapper>
      모달
      <img src={CloseIcon} width={30} />
      <HSButton variant="primary" size="medium" shape="round" children="추가" />
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid blue;
  position: relative;
  & > button {
    position: absolute;
    top: 250px;
    left: 55px;
  }
  & > img {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }
`;
