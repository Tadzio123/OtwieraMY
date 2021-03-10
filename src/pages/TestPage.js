import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import mapActions from 'actions/map.actions';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line react/prop-types
const TestPage = ({
  activeMarker, activeMarkerData, setActiveMarker, setActiveMarkerData,
}) => (
  <Container>
    <h1>{activeMarker && activeMarker}</h1>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <button type="button" onClick={() => console.log(activeMarker)}>check state</button>
    <button type="button" onClick={() => console.log(activeMarkerData)}>check state</button>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <button type="button" onClick={() => setActiveMarker(9)}>set marker id to 9</button>
    <button type="button" onClick={() => setActiveMarkerData({ test: 'helloo' })}>set marker data to test: test</button>
  </Container>
);
const mapStateToProps = (state) => ({
  activeMarker: state.markerID.selectedMarkerID,
  activeMarkerData: state.markerData.selectedMarkerData,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveMarker: (id) => dispatch(mapActions.activeMarkerID(id)),
  setActiveMarkerData: (data) => dispatch(mapActions.activeMarkerData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
