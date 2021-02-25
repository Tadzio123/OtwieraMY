import React, { useEffect, useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import styled from 'styled-components';
import placeService from 'services/places.service';

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  
  width: 100%;
  height: 100vh;
`;

const Map = () => {
  const [coordinates, setCoordinates] = useState([]);
  const mapDefaultPosition = [51.919437, 19.145136];

  useEffect(() => {
    setCoordinates(placeService.getAllPlacesCoordinates());
  }, []);

  return (
    <StyledMapContainer center={mapDefaultPosition} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=ABxrBA7sOVSSwxg7OTjT"
      />
      {
        coordinates.forEach(({ id, coordinateX, coordinateY }) => <Marker position={[coordinateY, coordinateX]} />)
      }
    </StyledMapContainer>
  );
};

export default Map;
