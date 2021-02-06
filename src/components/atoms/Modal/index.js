import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 15%;
  width: ${({ isOpen }) => (isOpen ? '70%' : '0%')};
  height: 70vh;
  z-index: 99999;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  transition: .5s;
`;

const ModalContent = styled.div`
  color: black;
  font-size: 40px;
  position: absolute;
  top: 10%;
  left: 0%;
  padding: 3%
`;

const ModalBackground = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  opacity: 40%;
  height: 90%;
  width: 100%;
`;

const ModalToolbar = styled.div`
  background-color: ${({ theme }) => theme.colorGray40};
  opacity: 40%;
  height: 10%;
  width: 100%;
  text-align: left;
  padding: 1% 3%;
`;

const ModalContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Modal = ({ isOpen, setOpen }) => {
  const buttonText = 'Close';

  const closeHaldner = () => {
    setOpen(false);
  };

  return (
    <StyledContainer isOpen={isOpen}>
      <ModalContentWrapper>
        <ModalContent>
          ABC
        </ModalContent>
        <ModalToolbar>
          <button type="button" onClick={closeHaldner}>{buttonText}</button>
        </ModalToolbar>
        <ModalBackground />
      </ModalContentWrapper>
    </StyledContainer>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Modal;
