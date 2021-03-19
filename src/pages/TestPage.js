/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import mapActions from 'actions/map.actions';
import Input from 'components/atoms/Input';
import { useAlert } from 'react-alert';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TestPage = () => {
	const alert = useAlert();

	useEffect(() => {
		alert.success('Hello world');
	});

	return (
		<Container>
			<Input placeholder="Zapisz" />
		</Container>
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
