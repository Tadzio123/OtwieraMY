import styled from 'styled-components';
import { Popup } from 'react-leaflet';

const StyledPopup = styled(Popup)`
  background-color: red;
  border-radius: 0;
  .leaflet-popup-content-wrapper {
    border-radius: 0;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

export default StyledPopup;
