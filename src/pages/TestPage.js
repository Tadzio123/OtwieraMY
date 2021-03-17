import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import mapActions from 'actions/map.actions';
import Modal from 'components/molecules/Modal';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line react/prop-types
const TestPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Container>
        <button type="button" onClick={() => setModalIsOpen(true)}>Open Modal</button>
      </Container>
      <Modal isOpenState={modalIsOpen} closeModalState={setModalIsOpen} />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
