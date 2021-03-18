/* eslint-disable */
import React, { useEffect } from 'react';
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
const TestPage = () => {
	useEffect(() => {
		function geoFindMe() {
			const status = document.querySelector('#status');
			const mapLink = document.querySelector('#map-link');

			mapLink.href = '';
			mapLink.textContent = '';

			function success(position) {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;

				status.textContent = '';
				// mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
				mapLink.href = `https://www.google.pl/maps/@${latitude},${longitude}`;
				mapLink.textContent = `X: ${latitude} °, Y: ${longitude} °`;
			}

			function error() {
				status.textContent = 'Nie możemy cię zlokalizować';
			}

			if (!navigator.geolocation) {
				status.textContent = 'Twoja przeglądarka nie wspiera geolokalizacji';
			} else {
				status.textContent = 'Locating…';
				navigator.geolocation.getCurrentPosition(success, error);
			}
		}

		document.querySelector('#find-me').addEventListener('click', geoFindMe);
	});

	return (
		<Container>
			<button id="find-me">Show my location</button>
			<br />
			<p id="status"></p>
			<a id="map-link" target="_blank"></a>
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