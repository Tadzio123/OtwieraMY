import styled from 'styled-components';
import { Popup } from 'react-leaflet';

const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    border-radius: 1rem;
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
  }
  
  .leaflet-popup-content{
    margin: 0;
    padding: 2rem 1rem;
  }


  .leaflet-popup-tip-container,
  .leaflet-popup-close-button{
    visibility: hidden;
  }
  h4, p{
    margin: 0;
  }
`;

export default StyledPopup;
