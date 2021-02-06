import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 15%;
  width: 0%;
  height: 70vh;
  z-index: 99999;
  opacity: 0%;
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

const Modal = () => {
  const buttonText = 'Close';

  const id = `${Math.random().toString(36).substring(7)}_Modal`;

  useEffect(() => {
    const modal = document.getElementById(id);

    modal.style.opacity = '100%';
    modal.style.width = '70%';
  });

  const closeHaldner = () => {
    const modal = document.getElementById(id);

    modal.style.opacity = 0;
    modal.style.width = 0;
  };

  return (
    <StyledContainer id={id}>
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

export default Modal;
