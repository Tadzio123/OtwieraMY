/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Icon from 'components/atoms/Icon';

const IconContainer = styled.div`
	position: absolute;
	top: 2rem;
	right: 2rem;
`;

const Overlay = styled.div`
	width: 100%;
	height: 100vh;

	background: ${({ theme }) => theme.colorGray40};
	opacity: 0.8;

	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;
`;

const Center = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledModal = styled.div`
	width: ${({ widthSize }) => widthSize};
	height: ${({ heightSize }) => heightSize};
	padding: 2rem;
	margin: 0 2rem;

	background-color: ${({ theme }) => theme.colorWhite};
	border-radius: 1rem;

	position: relative;
	top: 0;
	left: 0;
	z-index: 9999;

	filter: drop-shadow(0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25));
`;

const Modal = ({
	isOpenState,
	children,
	theme,
	widthSize,
	heightSize,
	closeModalState,
}) =>
	isOpenState && (
		<>
			<Overlay />
			<Center>
				<StyledModal heightSize={heightSize} widthSize={widthSize}>
					<IconContainer>
						<Icon
							name="cancel"
							color={theme.colorGray40}
							width="1.6rem"
							height="1.6rem"
							onClick={() => closeModalState(false)}
							cursorType="pointer"
						/>
					</IconContainer>

					{children}
				</StyledModal>
			</Center>
		</>
	);

Modal.propTypes = {
	isOpenState: PropTypes.bool.isRequired,
	closeModalState: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
		.isRequired,
	widthSize: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
		PropTypes.string,
	]),
	heightSize: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
		PropTypes.string,
	]),
};

Modal.defaultProps = {
	widthSize: '36.6rem',
	heightSize: '15.3rem',
};

export default withTheme(Modal);
