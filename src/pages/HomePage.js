import React, { useEffect, useState } from 'react';
import Map from 'components/organisms/Map';
import Menu from 'components/molecules/Menu';
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;

let initialValues = {
  name: '',
  street: '',
  number: '',
  postalCode: '',
  city: '',
  coordinateX: '',
  coordinateY: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  street: Yup.string().required(),
  number: Yup.number().required(),
  postalCode: Yup.string().required(),
  city: Yup.string().required(),
  coordinateX: Yup.number().required(),
  coordinateY: Yup.number().required(),
});

const HomePage = ({ activeMarker, theme, activeMarkerData }) => {
  const modalTypeDefault = {
    title: 'DODAJ LOKAL',
    type: 'ADD',
  };

  const [userLogged, setUserLogged] = useState(false);

  const [placeModalIsOpen, setPlaceModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(modalTypeDefault);

  const alert = useAlert();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setUserLogged(true);
    }
  }, []);

  const onSubmit = (values) => {
    const {
      city, coordinateX, coordinateY, name, number, postalCode, street,
    } = values;

    if (modalType.type === 'ADD') {
      placeService
        .getAllPlacesCoordinates()
        .then((res) => res.json())
        .then((json) => {
          json.forEach((place) => {
            if (place.coordinateY === coordinateY) {
              if (place.coordinateX === coordinateX) {
                alert.error('Istnieje już lokal na podanych koordynatach');
              } else {
                placeService.addPlace(city, coordinateX, coordinateY, name, number, postalCode, street, authToken)
                  .then(() => {
                    setPlaceModalIsOpen(false);
                    alert.success('Lokal został dodany');
                  })
                  .catch(() => {
                    alert.error('Coś poszło nie tak');
                  });
              }
            }
          });
        })
        .catch(() => alert.error('Coś poszło nie tak'));
    } if (modalType.type === 'EDIT') {
      const { id } = activeMarkerData;

      placeService.updatePlace(city, coordinateX, coordinateY, name, number, postalCode, street, id, authToken)
        .then(() => {
          alert.success('Lokal został zakualizowany');
          setPlaceModalIsOpen(false);
        })
        .catch(() => {
          alert.error('Coś poszło nie tak');
        });
    }
  };

  const closePopup = () => {
    document.querySelector('.leaflet-popup-close-button').click();
  };

  const logoutUser = () => {
    accountService.logout(authToken)
      .then(() => {
        localStorage.removeItem('authToken');
        alert.success('Zostałeś wylogowany');
        window.location.reload(true);
      })
      .catch(() => {
        alert.error('Coś poszło nie tak');
      });
  };

  const deleteSelectedMarker = () => {
    placeService.deletePlace(activeMarker, authToken)
      .then(() => {
        alert.success('Lokal został usunięty pomyślnie');
        window.location.reload(true);
      })
      .catch(() => {
        alert.error('Coś poszło nie tak');
      });
  };

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
          buttonGpsClick={() => console.log('button chat clicked')}
          buttonCancelClick={closePopup}
        />
      );
    }
    // default menu (user)
    return (
      <Menu
        type="UserDefault"
        buttonChatClick={() => console.log('button chat clicked')}
        buttonGpsClick={() => console.log('button gps clicked')}
      />
    );
  };

  return (
    <>
      {renderMenu(userLogged, activeMarker)}
      <MessengerCustomerChat pageId="108326621329627" appId="425007615233770" />
      <Map userLogged={userLogged} />

      <Modal isOpenState={confirmModalIsOpen} closeModalState={setConfirmModalIsOpen} widthSize="43.5rem" heightSize="15.3rem">
        <ModalTitleContainer>
          <Typography color={theme.colorGray40} component="p" type="font-md-regular">Usunąć ten lokal?</Typography>
        </ModalTitleContainer>
        <Center>
          <Button buttonType="primary" buttonSize="md" onClick={() => setConfirmModalIsOpen(false)}>Anuluj</Button>
          <Button buttonType="secondary" buttonSize="md" onClick={deleteSelectedMarker}>Usuń</Button>
        </Center>
      </Modal>

      <Modal isOpenState={placeModalIsOpen} closeModalState={setPlaceModalIsOpen} widthSize="50.4rem" heightSize="52.3rem">
        <ModalTitleContainer>
          <Typography color={theme.colorGray40} component="p" type="font-md-regular">{modalType.title}</Typography>
        </ModalTitleContainer>
        <Line />
        <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnChange validationSchema={validationSchema}>
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
                <Button buttonSize="md" buttonType="primary" type="submit" disabled={!isValid}>Zapisz</Button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  activeMarker: state.markerID.selectedMarkerID,
  activeMarkerData: state.markerData.selectedMarkerData,
});

export default compose(
  withRouter,
  withTheme,
  connect(mapStateToProps),
)(HomePage);
