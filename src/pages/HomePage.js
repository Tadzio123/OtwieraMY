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

const HomePage = ({ activeMarker }) => {
  const [userLogged, setUserLogged] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setUserLogged(true);
    }
  }, []);

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

  const renderMenu = (userIsLogged, selectedMarker) => {
    // check if admin is logged
    if (userIsLogged === true) {
      if (selectedMarker !== null) {
        // open menu when marker is active (admin site)
        return (
          <Menu
            type="AdminSelected"
            buttonCancelClick={closePopup}
            buttonEditClick={() => console.log('button edit click')}
            buttonDeleteClick={deleteSelectedMarker}
            buttonExitClick={logoutUser}
          />
        );
      }
      // default menu (admin)
      return (
        <Menu
          type="AdminDefault"
          buttonPinClick={() => console.log('button pin click')}
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
      <Map userLogged={userLogged} />
    </>
  );
};

const mapStateToProps = (state) => ({
  activeMarker: state.markerID.selectedMarkerID,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(HomePage);
