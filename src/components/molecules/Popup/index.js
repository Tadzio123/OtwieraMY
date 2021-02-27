import styled from 'styled-components';
import { Popup } from 'react-leaflet';

const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    border-radius: 1rem;
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
    padding: 1rem .5rem;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

export default StyledPopup;
