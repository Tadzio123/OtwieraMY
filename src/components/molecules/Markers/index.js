import L from 'leaflet';
import markerPrimaryIcon from 'assets/icons/marker-primary.svg';
import markerPrimaryActiveIcon from 'assets/icons/marker-primary-active.svg';

const sizeOfIcon = [35, 50];

const markerPrimary = new L.Icon({
  iconUrl: markerPrimaryIcon,
  iconSize: sizeOfIcon,
});

const markerPrimaryActive = new L.Icon({
  iconUrl: markerPrimaryActiveIcon,
  iconSize: sizeOfIcon,
});

const Markers = {
  primary: markerPrimary,
  primaryActive: markerPrimaryActive,
};

export default Markers;
