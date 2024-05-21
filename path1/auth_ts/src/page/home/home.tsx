import { useState } from "react";
import Modal from "../../component/modal";
import HSButton from "../../component/button";

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      <HSButton variant="primary" size="medium" shape="round" children="추가" onClick={openModal} />
    </>
  );
};

export default HomePage;
