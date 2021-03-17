/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import mapActions from 'actions/map.actions';
import ConfirmationModal from 'components/atoms/ConfirmationModal';
import Modal from 'components/atoms/Modal';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

// eslint-disable-next-line react/prop-types
const TestPage = () => (
	<Container>
		<Modal isOpen='true' />
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
