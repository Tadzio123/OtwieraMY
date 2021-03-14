/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import handleTextType from 'utils/handleTextType';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const StyledContainer = styled.div`
	position: fixed;
	top: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 99999;
	opacity: 100%;
	transition: 0.5s;
	background: black;
`;

const ModalContent = styled.div`
	color: black;
	font-size: 4rem;
	margin: auto;
	top: ${({ height }) => `${(100 - height) / 2}%`};
	left: ${({ width }) => `${(100 - width) / 2}%`};
	width: 435px;
	min-height: 153px;
	z-index: 100;
	position: absolute;
	background-color: white;
	border-radius: 1rem;
	padding: 3% 4%;
	${() => handleTextType('font-md-regular')};
	color: ${({ theme }) => theme.colorBlack};
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

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	button:nth-child(1) {
		margin-right: 1rem;
	}
`;

const ConfirmationModal = ({
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
		padding: '0px 0px 15px 0px',
	};
	const contentContainerStyle = { ...style, textAlign: 'left', padding: '1%' };

	let titleSlot;

	if (Array.isArray(children)) {
		titleSlot = children.find(
			(child) => child.props && child.props.type === 'title'
		);
	} else {
		titleSlot = null;
	}
	return (
		<StyledContainer isOpen={isOpen}>
			<ModalContentWrapper>
				<ModalContent width={width} height={height}>
					<div style={closeButtonContainerStyle}>
						<CloseBtn type='button' onClick={closeHandler}>
							<Icon name='cancel' color='black' height='1.6rem' />
						</CloseBtn>
					</div>
					<div style={titleContainerStyle}>{titleSlot || title}</div>
					<div style={contentContainerStyle}>
						<form>
							<ButtonContainer>
								<Button buttonSize='md' buttonType='primary' type='submit'>
									Anuluj
								</Button>
								<Button buttonSize='md' buttonType='secondary' type='submit'>
									Usuń
								</Button>
							</ButtonContainer>
						</form>
					</div>
				</ModalContent>
				<ModalBackground />
			</ModalContentWrapper>
		</StyledContainer>
	);
};

ConfirmationModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	title: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	width: PropTypes.number,
	height: PropTypes.number,
};

ConfirmationModal.defaultProps = {
	title: 'Usunąć ten lokal?',
	width: 70,
	height: 20,
};

export default ConfirmationModal;
