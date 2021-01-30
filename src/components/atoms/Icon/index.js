import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as PencilIcon } from 'assets/icons/edit.svg';
import { ReactComponent as UnionIcon } from 'assets/icons/delete.svg';

const handleIconType = (name) => {
  switch (name) {
    case 'pencil':
      return <PencilIcon />;
    case 'union':
      return <UnionIcon />;
    default:
      return <PencilIcon />;
  }
};

const handleIconColor = (color) => {
  switch (color) {
    case 'green':
      return css`
        fill: ${({ theme }) => theme.colorSuccess};
      `;
    case 'red':
      return css`
        fill: ${({ theme }) => theme.colorDanger};
      `;
    default:
      return css`
        fill: ${({ theme }) => theme.colorBlack};
      `;
  }
};

const StyledIcon = styled.div`
  svg path {
    ${({ color }) => handleIconColor(color)};
  }
`;

const Icon = ({
  name, color,
}) => (
  <>
    <StyledIcon color={color}>
      {handleIconType(name)}
    </StyledIcon>
  </>
);

Icon.propTypes = {
  name: PropTypes.oneOf(['pencil', 'union']),
  color: PropTypes.oneOf(['green', 'red']),
};

Icon.defaultProps = {
  name: 'union',
  color: ({ theme }) => theme.colorBlack,
};

export default Icon;
