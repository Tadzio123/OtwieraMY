import L from 'leaflet';
import markerPrimaryIcon from 'assets/icons/marker-primary.svg';
import markerPrimaryActiveIcon from 'assets/icons/marker-primary-active.svg';
import markerUserIcon from 'assets/icons/marker-user.svg';

const sizeOfIcon = [35, 50];

const markerPrimary = new L.Icon({
  iconUrl: markerPrimaryIcon,
  iconSize: sizeOfIcon,
});

const markerPrimaryActive = new L.Icon({
  iconUrl: markerPrimaryActiveIcon,
  iconSize: sizeOfIcon,
});

const markerUser = new L.Icon({
  iconUrl: markerUserIcon,
  iconSize: [35, 35],
});

const MarkerIcon = {
  primary: markerPrimary,
  primaryActive: markerPrimaryActive,
  user: markerUser,
};

export default MarkerIcon;
