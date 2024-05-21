import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import HSButton from "./button";
import CloseIcon from "../assets/5003-512.webp";

interface ModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setIsOpenModal }) => {
  const closeModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const onAddTask = () => {
    alert("추가 완료");
    setIsOpenModal((prev) => !prev);
  };

  return (
    <Wrapper>
      모달
      <img src={CloseIcon} width={30} onClick={closeModal} />
      <HSButton variant="primary" size="medium" shape="round" children="추가" onClick={onAddTask} />
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
