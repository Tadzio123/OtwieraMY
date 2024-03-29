/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Map from 'components/organisms/Map';
import Menu from 'components/molecules/Menu';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';
import accountService from 'services/account.service';
import placeService from 'services/places.service';
import authToken from '_helpers/authToken';
import Modal from 'components/molecules/Modal';
import styled, { withTheme } from 'styled-components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Typography from 'components/atoms/Typography';
import mapActions from 'actions/map.actions';
import MessengerCustomerChat from 'components/atoms/messenger';
import HomePageTemplate from 'template/HomePageTemplate';

const ModalTitleContainer = styled.div`
	margin-top: 1rem;
`;

const Line = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colorGray30};
	margin: 2rem 0;
`;

const Center = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
`;

const StreetInput = styled.div`
	display: flex;
	justify-content: space-between;
	div:nth-child(1) {
		width: 74%;
	}
	div:nth-child(2) {
		width: 23%;
	}
`;

const CoordinatesInput = styled.div`
	display: flex;
	justify-content: space-between;
	div {
		width: 48%;
	}
`;

const InputContainer = styled.div`
	margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

// formik default values
let initialValues = {
	name: '',
	street: '',
	number: '',
	postalCode: '',
	city: '',
	coordinateX: '',
	coordinateY: '',
};

// formik validation
const validationSchema = Yup.object({
	name: Yup.string().required(),
	street: Yup.string().required(),
	number: Yup.number().required(),
	postalCode: Yup.string().required(),
	city: Yup.string().required(),
	coordinateX: Yup.number().required(),
	coordinateY: Yup.number().required(),
});

const HomePage = ({
	activeMarker,
	activeMarkerData,
	setUserLocation,
	theme,
}) => {
	const [userLogged, setUserLogged] = useState(false);

	const [placeModalIsOpen, setPlaceModalIsOpen] = useState(false);
	const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
	const [modalType, setModalType] = useState({
		title: 'DODAJ LOKAL',
		type: 'ADD',
	});
	const alert = useAlert();

	// get user location when user location is in poland
	const getUserLocation = () => {
		function success(position) {
			const { latitude, longitude } = position.coords;

			setUserLocation([latitude, longitude]);
		}

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, null);
		}
	};

	// get authToken from localstorage
	useEffect(() => {
		if (localStorage.getItem('authToken')) {
			setUserLogged(true);
		}
		getUserLocation();
	}, []);

	// create or update place
	const onSubmit = (values) => {
		const {
			city,
			coordinateX,
			coordinateY,
			name,
			number,
			postalCode,
			street,
		} = values;

		if (modalType.type === 'ADD') {
			placeService
				.getAllPlacesCoordinates()
				.then((res) => res.json())
				.then((json) => {
					if(json.length > 0) {
						json.forEach((place) => {
							if (place.coordinateY === coordinateY && place.coordinateX === coordinateX) {
								alert.error('Istnieje już lokal na podanych koordynatach');
							} else {
								placeService
									.addPlace(
										city,
										parseFloat(coordinateX),
										parseFloat(coordinateY),
										name,
										parseFloat(number),
										postalCode,
										street,
										authToken
									)
									.then(() => {
										setPlaceModalIsOpen(false);
										alert.success('Lokal został dodany');
										window.location.reload(true);
									})
									.catch(() => {
										alert.error('Coś poszło nie tak');
									});
							}
						});
					} else {
						placeService
							.addPlace(
								city,
								parseFloat(coordinateX),
								parseFloat(coordinateY),
								name,
								parseFloat(number),
								postalCode,
								street,
								authToken
							)
							.then(() => {
								setPlaceModalIsOpen(false);
								alert.success('Lokal został dodany');
								window.location.reload(true);
							})
							.catch(() => {
								alert.error('Coś poszło nie tak');
							});
					}
				})
				.catch(() => alert.error('Coś poszło nie tak'));
		}	if (modalType.type === 'EDIT') {
			placeService
				.updatePlace(
					city,
					parseFloat(coordinateX),
					parseFloat(coordinateY),
					name,
					parseFloat(number),
					postalCode,
					street,
					activeMarker,
					authToken
				)
				.then(() => {
					setPlaceModalIsOpen(false);
					alert.success('Lokal został zakualizowany');
					window.location.reload(true);
				})
				.catch(() => {
					alert.error('Coś poszło nie tak');
				});
		}
	};

	// close popup when marker is selected
	const closePopup = () => {
		document.querySelector('.leaflet-popup-close-button').click();
	};

	// logout user when token exists in localstorage
	const logoutUser = () => {
		accountService
			.logout(authToken)
			.then(() => {
				localStorage.removeItem('authToken');
				alert.success('Zostałeś wylogowany');
				window.location.reload(true);
			})
			.catch(() => {
				alert.error('Coś poszło nie tak');
			});
	};

	// delete selected marker on click button
	const deleteSelectedMarker = () => {
		placeService
			.deletePlace(activeMarker, authToken)
			.then(() => {
				alert.success('Lokal został usunięty pomyślnie');
				window.location.reload(true);
			})
			.catch(() => {
				alert.error('Coś poszło nie tak');
			});
	};

	// edit selected marker and open modal
	const editSelectedMarker = () => {
		initialValues = activeMarkerData;
		setModalType({
			title: 'EDYTUJ LOKAL',
			type: 'EDIT',
		});
		setPlaceModalIsOpen(true);
	};

	const renderMenu = (userIsLogged, selectedMarker) => {
		// check if admin is logged
		if (userIsLogged === true) {
			if (selectedMarker !== null) {
				// open menu when marker is active (admin site)
				return (
					<Menu
						type="AdminSelected"
						buttonCancelClick={closePopup}
						buttonEditClick={editSelectedMarker}
						buttonDeleteClick={() => setConfirmModalIsOpen(true)}
						buttonExitClick={logoutUser}
					/>
				);
			}
			// default menu (admin)
			return (
				<Menu
					type="AdminDefault"
					buttonPinClick={() => {
						setModalType({
							title: 'DODAJ LOKAL',
							type: 'ADD',
						});
						setPlaceModalIsOpen(true);
						initialValues = {
							name: '',
							street: '',
							number: '',
							postalCode: '',
							city: '',
							coordinateX: '',
							coordinateY: '',
						};
					}}
					buttonExitClick={logoutUser}
				/>
			);
		}
		if (selectedMarker !== null) {
			// open menu when marker is active (user site)
			return (
				<Menu
					type="UserSelected"
					buttonGpsClick={getUserLocation}
					buttonCancelClick={closePopup}
				/>
			);
		}
		// default menu (user)
		return <Menu type="UserDefault" buttonGpsClick={getUserLocation} />;
	};

	return (
		<HomePageTemplate>
			{renderMenu(userLogged, activeMarker)}
			{!userLogged && (
				<MessengerCustomerChat
					pageId="108326621329627"
					appId="425007615233770"
					themeColor="#1976D2"
					language="pl_PL"
					logged_in_greeting="Witaj! W czym możemy pomóc?"
					logged_out_greeting="Witaj! W czym możemy pomóc?"
					attribution="install_email"
				/>
			)}
			<Map userLogged={userLogged} />

			<Modal
				isOpenState={confirmModalIsOpen}
				closeModalState={setConfirmModalIsOpen}
				widthSize="43.5rem"
				heightSize="15.3rem"
			>
				<ModalTitleContainer>
					<Typography
						color={theme.colorGray40}
						component="p"
						type="font-md-regular"
					>
						Usunąć ten lokal?
					</Typography>
				</ModalTitleContainer>
				<Center>
					<Button
						buttonType="primary"
						buttonSize="md"
						onClick={() => setConfirmModalIsOpen(false)}
					>
						Anuluj
					</Button>
					<span>&nbsp;&nbsp;</span>
					<Button
						buttonType="secondary"
						buttonSize="md"
						onClick={deleteSelectedMarker}
					>
						Usuń
					</Button>
				</Center>
			</Modal>

			<Modal
				isOpenState={placeModalIsOpen}
				closeModalState={setPlaceModalIsOpen}
				widthSize="50.4rem"
				heightSize="52.3rem"
			>
				<ModalTitleContainer>
					<Typography
						color={theme.colorGray40}
						component="p"
						type="font-md-regular"
					>
						{modalType.title}
					</Typography>
				</ModalTitleContainer>
				<Line />
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validateOnChange
					validationSchema={validationSchema}
				>
					{({ errors, touched, isValid }) => (
						<Form>
							<InputContainer>
								<Field
									id="name"
									type="text"
									name="name"
									placeholder="Nazwa lokalu"
									error={errors.name && touched.name}
									as={Input}
								/>
							</InputContainer>
							<InputContainer>
								<StreetInput>
									<Field
										id="street"
										type="text"
										name="street"
										placeholder="Ulica"
										error={errors.street && touched.street}
										as={Input}
									/>
									<Field
										id="number"
										type="text"
										name="number"
										placeholder="Numer"
										error={errors.number && touched.number}
										as={Input}
									/>
								</StreetInput>
							</InputContainer>
							<InputContainer>
								<Field
									id="postalCode"
									type="text"
									name="postalCode"
									placeholder="Kod pocztowy"
									error={errors.postalCode && touched.postalCode}
									as={Input}
								/>
							</InputContainer>
							<InputContainer>
								<Field
									id="city"
									type="text"
									name="city"
									placeholder="Miasto"
									error={errors.city && touched.city}
									as={Input}
								/>
							</InputContainer>
							<InputContainer>
								<CoordinatesInput>
									<Field
										id="coordinateX"
										type="text"
										name="coordinateX"
										placeholder="Koordynat X"
										error={errors.coordinateX && touched.coordinateX}
										as={Input}
									/>
									<Field
										id="coordinateY"
										type="text"
										name="coordinateY"
										placeholder="Koordynat Y"
										error={errors.coordinateY && touched.coordinateY}
										as={Input}
									/>
								</CoordinatesInput>
							</InputContainer>
							<ButtonContainer>
								<Button
									buttonSize="md"
									buttonType="primary"
									type="submit"
									disabled={!isValid}
								>
									Zapisz
								</Button>
							</ButtonContainer>
						</Form>
					)}
				</Formik>
			</Modal>
		</HomePageTemplate>
	);
};

const mapStateToProps = (state) => ({
	activeMarker: state.markerID.selectedMarkerID,
	activeMarkerData: state.markerData.selectedMarkerData,
});

const mapDispatchToProps = (dispatch) => ({
	setUserLocation: (data) => dispatch(mapActions.userLocationData(data)),
});

export default compose(
	withRouter,
	withTheme,
	connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
