import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import handleTextType from 'utils/handleTextType';

const StyledContainer = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
  left: 0%;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  opacity: 100%;
  transition: .5s;
`;

const ModalContent = styled.div`
  color: black;
  font-size: 40px;
  margin: auto;
  top: ${({ height }) => `${(100 - height) / 2}%`};
  left: ${({ width }) => `${(100 - width) / 2}%`};;
  width: ${({ width }) => `${width}%`};
  min-height: ${({ height }) => `${height}%`};
  z-index: 100;
  position: absolute;
  background-color: white;
  border-radius: 10px;
  padding: 1%;
  ${() => handleTextType('font-sm-light')};
  color: ${({ theme }) => theme.colorGray40}
`;

const ModalBackground = styled.div`
  background-color: white;
  opacity: 20%;
  height: 100%;
  width: 100%;
  z-index: 150;
`;

const ModalContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  outline: unset;
`;

const Modal = ({
  isOpen,
  setOpen,
  title,
  children,
  width,
  height,
}) => {
  const closeHandler = () => {
    setOpen(false);
  };

  const style = { width: '100%' };
  const closeButtonContainerStyle = { ...style, textAlign: 'right' };
  const titleContainerStyle = {
    ...style,
    textAlign: 'left',
    padding: '2%',
    paddingBottom: '1%',
    borderWidth: '1px',
    borderColor: 'gray',
    borderStyle: 'none none solid none',
    fontSize: '3rem',
    margin: '1%',
  };
  const contentContainerStyle = { ...style, textAlign: 'left', padding: '1%' };

  let contentSlot;
  let titleSlot;

  if (Array.isArray(children)) {
    contentSlot = children.find((child) => child.props && child.props.type === 'content');
    titleSlot = children.find((child) => child.props && child.props.type === 'title');
  } else {
    contentSlot = children;
    titleSlot = null;
  }

  return (
    <StyledContainer isOpen={isOpen}>
      <ModalContentWrapper>
        <ModalContent width={width} height={height}>
          <div style={closeButtonContainerStyle}>
            <CloseBtn type="button" onClick={closeHandler}>
              <Icon name="union" color="gray" height="1.5rem" />
            </CloseBtn>
          </div>
          <div style={titleContainerStyle}>{titleSlot || title}</div>
          <div style={contentContainerStyle}>{contentSlot}</div>
        </ModalContent>
        <ModalBackground />
      </ModalContentWrapper>
    </StyledContainer>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
};

Modal.defaultProps = {
  title: 'Title',
  children: null,
  width: 70,
  height: 70,
};

export default Modal;
