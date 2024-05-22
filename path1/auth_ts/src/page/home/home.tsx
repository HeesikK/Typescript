import { useState } from "react";
import Modal from "../../component/modal";
import HSButton from "../../component/button";
import styled from "styled-components";
import { flexCenter } from "../../style/common.style";

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <div>{isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}</div>
      <HSButton variant="primary" size="medium" shape="round" children="+" onClick={openModal} />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction:column;
  & > div {
    margin-bottom: 25px;
  }
`;
