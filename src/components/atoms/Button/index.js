/* eslint-disable */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import handleTextType from 'utils/handleTextType';

const handleButtonSize = (buttonSize) => {
	switch (buttonSize) {
		case 'sm':
			return css`
				max-width: 15.3rem;
			`;
		case 'md':
			return css`
				max-width: 18.7rem;
			`;
		case 'lg':
			return css`
				max-width: 29.1rem;
			`;
		default:
			return css`
				max-width: 15.3rem;
			`;
	}
};

const handleButtonType = (buttonType) => {
	switch (buttonType) {
		case 'primary':
			return css`
				background-color: ${({ theme }) => theme.colorPrimary};

				&:hover,
				&:focus,
				&:active {
					background-color: ${({ theme }) => theme.colorPrimaryDark};
				}
			`;
		case 'secondary':
			return css`
				background-color: ${({ theme }) => theme.colorDanger};

				&:hover,
				&:focus,
				&:active {
					background-color: ${({ theme }) => theme.colorDangerDark};
				}
			`;
		default:
			return css`
				background-color: ${({ theme }) => theme.colorPrimary};

				&:hover,
				&:focus,
				&:active {
					background-color: ${({ theme }) => theme.colorPrimaryDark};
				}
			`;
	}
};

const StyledButton = styled.button`
	outline: none;
	border: none;
	cursor: pointer;

	border-radius: 0.5rem;

	height: 3.6rem;
	//width size
	width: 50%;
	${({ buttonSize }) => handleButtonSize(buttonSize)};

	//font style
	${() => handleTextType('font-sm-bolt')};
	color: ${({ theme }) => theme.colorWhite};
	text-transform: uppercase;

	//button color
	${({ buttonType }) => handleButtonType(buttonType)};

	//button disabled
	&:disabled {
		background-color: ${({ theme }) => theme.colorGray30};
		color: ${({ theme }) => theme.colorWhite};
		cursor: not-allowed;
	}
`;

const Button = ({ buttonType, buttonSize, disabled, children, ...rest }) => (
	<StyledButton
		buttonType={buttonType}
		buttonSize={buttonSize}
		disabled={disabled}
		{...rest}
	>
		{children}
	</StyledButton>
);

Button.propTypes = {
	buttonType: PropTypes.oneOf(['primary', 'secondary']),
	buttonSize: PropTypes.oneOf(['sm', 'md', 'lg']),
	disabled: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object,
		PropTypes.func,
		PropTypes.number,
	]),
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
		PropTypes.object,
		PropTypes.func,
	]).isRequired,
};

Button.defaultProps = {
	buttonType: 'primary',
	buttonSize: 'sm',
	disabled: false,
};

export default Button;
