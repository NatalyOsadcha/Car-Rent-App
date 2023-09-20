import { GrClose } from 'react-icons/gr';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Overlay from 'components/Overlay/Overlay';
import { CloseModalButton } from './CarModal.styled';
import Modal from 'components/ModalWindow/ModalWindow';
import CarCard from 'components/CarCard/CarCard';

const carModalRoot = document.querySelector('#modal-root');

export default function CarModal({ toggleModal, car}) {
  /// Close modal by pressing Escape ///

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  /// Close modal by click on overlay ///
  const handleOverlay = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlay}>
      <Modal>
        <CloseModalButton type="button" onClick={toggleModal}>
          <GrClose size={20} />
        </CloseModalButton>
        <CarCard toggleModal={toggleModal} car={car} />
      </Modal>
    </Overlay>,
    carModalRoot
  );
}
