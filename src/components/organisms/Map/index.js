import React, { useState, useEffect } from 'react';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';
import styled from 'styled-components';
import placeService from 'services/places.service';
import MarkerIcon from 'components/molecules/MarkerIcon';
import StyledPopup from 'components/molecules/Popup';
import Typography from 'components/atoms/Typography';
import { connect } from 'react-redux';
import mapActions from 'actions/map.actions';

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  
  width: 100%;
  height: 100vh;
`;

const Map = ({
  activeMarker, activeMarkerData, setActiveMarker, setActiveMarkerData,
}) => {
  const [coordinates, setCoordinates] = useState([]);

  const getAllPlacesCoordinates = async () => {
    await placeService
      .getAllPlacesCoordinates()
      .then((req) => req.json())
      .then((json) => setCoordinates(json));
  };

  useEffect(() => {
    getAllPlacesCoordinates();
  }, []);

  const mapDefaultPosition = [51.919437, 19.145136];

  // set icon to active marker
  const getMarkerIcon = (index) => {
    if (index === activeMarker) {
      return MarkerIcon.primaryActive;
    }
    return MarkerIcon.primary;
  };

  // set marker active and get data from endpoint by marker id
  const setActiveMarkerFunc = async (id) => {
    setActiveMarker(id);
    await placeService.getPlaceByCoordinate(id)
      .then((res) => (res.json()))
      .then((json) => setActiveMarkerData(json));
  };

  return (
    <>
      <StyledMapContainer center={mapDefaultPosition} zoom={13} scrollWheelZoom zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=ABxrBA7sOVSSwxg7OTjT"
        />
        {coordinates.map((place) => (
          <Marker
            key={place.id}
            index={place.id}
            icon={getMarkerIcon(place.id)}
            position={[place.coordinateX, place.coordinateY]}
            eventHandlers={{
              click: () => setActiveMarkerFunc(place.id),
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
            setActiveMarkerData(null);
            setActiveMarker(null);
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
};

const mapStateToProps = (state) => ({
  activeMarker: state.markerID.selectedMarkerID,
  activeMarkerData: state.markerData.selectedMarkerData,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveMarker: (id) => dispatch(mapActions.activeMarkerID(id)),
  setActiveMarkerData: (data) => dispatch(mapActions.activeMarkerData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
