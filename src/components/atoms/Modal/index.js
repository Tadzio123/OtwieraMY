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
// import Typography from '../Typography';

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
	width: ${({ width }) => `${width}%`};
	min-height: ${({ height }) => `${height}%`};
	z-index: 100;
	position: absolute;
	background-color: white;
	border-radius: 1rem;
	padding: 2%;
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
	padding: 10px;
`;

// const StyledInput = styled.input`
//   width: 100%;
//   height: 4.8rem;
//   padding: 0 1rem;
//   margin: 0 0 1rem 0;
//   border-radius: 0.5rem;
//   border: 1px solid #707070;
//   font-family: 'Roboto';
//   font-size: 1.4rem;
//   font-weight: 300;
// `;
// const inputWrapper = { display: 'flex', flexDirection: 'row' };
// const streetName = { width: '75%', flexGrow: '2', marginRight: '1rem' };
// const streetNumber = { width: '25%', flexGrow: '1' };
// const inputSpace = { marginRight: '1rem' };
// const inputSave = {
//   width: '15.3rem',
//   height: '3.6rem',
//   alignSelf: 'flex-end',
//   outline: 'none',
//   border: 'none !important',
//   background: '#C4C4C4',
//   color: '#ffffff',
//   fontWeight: 'bold !important',
// };

const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 42vh;
	margin-bottom: 2.7rem;
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1.9rem;
`;

const StreetInput = styled.div`
	display: flex;
	justify-content: space-between;
	div:nth-child(1) {
		width: 75%;
	}
	div:nth-child(2) {
		width: 23%;
	}
`;

const CoordinatesInput = styled.div`
	display: flex;
	justify-content: space-between;

	div {
		width: 49%;
	}
`;

const Modal = ({ isOpen, setOpen, title, children, width, height }) => {
	const closeHandler = () => {
		setOpen(false);
	};

	const style = { width: '100%' };
	const closeButtonContainerStyle = { ...style, textAlign: 'right' };
	const titleContainerStyle = {
		...style,
		textAlign: 'left',
		padding: '0px 0px 10px 0px',
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

	const initialValues = {
		name: '',
		street: '',
		streetNumber: '',
		postCode: '',
		city: '',
		coordinateX: '',
		coordinateY: '',
	};
	const validationSchema = Yup.object({
		name: Yup.string().required(),
		street: Yup.string().required(),
		streetNumber: Yup.string().required(),
		postCode: Yup.string().required(),
		city: Yup.string().required(),
		coordinateX: Yup.string().required(),
		coordinateY: Yup.string().required(),
	});

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
					<hr />
					<div style={contentContainerStyle}>
						<Formik
							initialValues={initialValues}
							validateOnChange
							validationSchema={validationSchema}
						>
							{({ errors, touched, isValid }) => (
								<Form>
									<InputsContainer>
										<Field
											id='name'
											type='text'
											name='name'
											placeholder='Nazwa'
											error={errors.name && touched.name}
											as={Input}
										/>
										<StreetInput>
											<Field
												id='street'
												type='text'
												name='street'
												placeholder='Ulica'
												error={errors.street && touched.street}
												as={Input}
											/>
											<Field
												id='streetNumber'
												type='text'
												name='streetNumber'
												placeholder='Numer'
												error={errors.streetNumber && touched.streetNumber}
												as={Input}
											/>
										</StreetInput>
										<Field
											id='postCode'
											type='text'
											name='postCode'
											placeholder='Kod pocztowy'
											error={errors.postCode && touched.postCode}
											as={Input}
										/>
										<Field
											id='city'
											type='text'
											name='city'
											placeholder='Miasto'
											error={errors.city && touched.city}
											as={Input}
										/>
										<CoordinatesInput>
											<Field
												id='coordinateX'
												type='text'
												name='coordinateX'
												placeholder='Koordynat X'
												error={errors.coordinateX && touched.coordinateX}
												as={Input}
											/>
											<Field
												id='coordinateY'
												type='text'
												name='coordinateY'
												placeholder='Koordynat Y'
												error={errors.coordinateY && touched.coordinateY}
												as={Input}
											/>
										</CoordinatesInput>
									</InputsContainer>
									<ButtonContainer>
										<Button
											buttonSize='md'
											buttonType='primary'
											type='submit'
											disabled={!isValid}
										>
											Zapisz
										</Button>
									</ButtonContainer>
								</Form>
							)}
						</Formik>
					</div>
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
	width: PropTypes.number,
	height: PropTypes.number,
};

Modal.defaultProps = {
	title: 'DODAJ LOKAL',
	width: 70,
	height: 70,
};

export default Modal;
