import React, { Component } from 'react';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';
import styled from 'styled-components';
import placeService from 'services/places.service';
import Markers from 'components/molecules/Markers';
import StyledPopup from 'components/molecules/Popup';
import Typography from 'components/atoms/Typography';
import Menu from 'components/molecules/Menu';
import PropTypes from 'prop-types';

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  
  width: 100%;
  height: 100vh;
`;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
      activeMarker: null,
      activeMarkerData: null,
    };
  }

  // load markers when map is loading
  async componentDidMount() {
    await placeService
      .getAllPlacesCoordinates()
      .then((req) => req.json())
      .then((json) => this.setState({ coordinates: json }))
      .catch((err) => console.log(err));
  }

  render() {
    const mapDefaultPosition = [51.919437, 19.145136];

    const {
      coordinates, activeMarker, activeMarkerData,
    } = this.state;

    const { userLogged } = this.props;

    // set icon to active marker
    const getMarkerIcon = (index) => {
      if (index === activeMarker) {
        return Markers.primaryActive;
      }
      return Markers.primary;
    };

    // set marker active and get data from endpoint by marker id
    const setActiveMarker = async (id) => {
      this.setState({ activeMarker: id });
      await placeService.getPlaceByCoordinate(id)
        .then((res) => (res.json()))
        .then((json) => this.setState({ activeMarkerData: json }));
    };

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
        <StyledMapContainer center={mapDefaultPosition} zoom={13} scrollWheelZoom zoomControl={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=ABxrBA7sOVSSwxg7OTjT"
          />
          {coordinates.map((place) => (
            <Marker
              key={place.id}
              index={place.id}
              position={[place.coordinateX, place.coordinateY]}
              icon={getMarkerIcon(place.id)}
              eventHandlers={{
                click: () => setActiveMarker(place.id),
              }}
            />
          ))}

          {activeMarkerData && (
          <StyledPopup
            position={[
              activeMarkerData.coordinateX,
              activeMarkerData.coordinateY,
            ]}
            onClose={() => {
              this.setState({
                activeMarker: null,
                activeMarkerData: null,
              });
            }}
          >
            <Typography component="h4" type="font-md-regular">{activeMarkerData.name}</Typography>
            <Typography component="p" type="font-sm-light">
              {activeMarkerData.street}
              {' '}
              {activeMarkerData.number}
              {', '}
              {activeMarkerData.postalCode}
              {' '}
              {activeMarkerData.city}
            </Typography>
          </StyledPopup>
          )}

        </StyledMapContainer>
      </>
    );
  }
}

Map.propTypes = {
  userLogged: PropTypes.bool.isRequired,
};

export default Map;
