import React, { useState } from "react";
import Sidebar from "../components/ui/side-bar/Sidebar";
import "./PageLayout.css";
import Navbar from "../components/ui/nav-bar/Navbar";
import useModal from "../hooks/useModal";
import Modal from "../components/modals/Modal";

const PageLayout = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const onOpenModal = (content) => {
    setModalContent(content);
    openModal();
  };
  const onRedirectCloseModal = () => {
    setModalContent(null);
    closeModal();
  };

  return (
    <div className="page-layout">
      <div className="navbar">
        <Navbar
          openModal={onOpenModal}
          isOpen={isOpen}
          closeModal={closeModal}
          onRedirectCloseModal={onRedirectCloseModal}
        />
      </div>
      <div className="content">{children}</div>
      <Sidebar />
      <Modal closeModal={closeModal} isOpen={isOpen}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default PageLayout;
