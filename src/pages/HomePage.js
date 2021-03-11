import React, { useEffect, useState } from 'react';
import Map from 'components/organisms/Map';
import { withRouter } from 'react-router-dom';
import Menu from 'components/molecules/Menu';
import { compose } from 'redux';
import { connect } from 'react-redux';

const HomePage = ({ activeMarker }) => {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setUserLogged(true);
    }
  }, []);

  const renderMenu = (userIsLogged, selectedMarker) => {
    // check if admin is logged
    if (userIsLogged === true) {
      if (selectedMarker !== null) {
        // open menu when marker is active (admin site)
        return <Menu type="AdminSelected" />;
      }
      // default menu (admin)
      return <Menu type="AdminDefault" />;
    }
    if (selectedMarker !== null) {
      // open menu when marker is active (user site)
      return <Menu type="UserSelected" />;
    }
    // default menu (user)
    return <Menu type="UserDefault" />;
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
