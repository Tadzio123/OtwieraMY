import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as PencilIcon } from 'assets/icons/edit.svg';
import { ReactComponent as UnionIcon } from 'assets/icons/delete.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg';
import { ReactComponent as GPSIcon } from 'assets/icons/gps.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrowUp.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowDown.svg';

const handleIconType = (name) => {
  switch (name) {
    case 'pencil':
      return <PencilIcon />;
    case 'union':
      return <UnionIcon />;
    case 'settings':
      return <SettingsIcon />;
    case 'gps':
      return <GPSIcon />;
    case 'arrowUp':
      return <ArrowUpIcon />;
    case 'arrowDown':
      return <ArrowDownIcon />;
    default:
      return <PencilIcon />;
  }
};

const StyledIcon = styled.div`
  align-self: flex-start;
  margin: 1.5rem 0 0 0;
  svg {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
  }
  svg path {
    fill: ${({ color }) => color};
  }
`;

const Icon = ({
  name, color, width, height,
}) => (
  <>
    <StyledIcon color={color} width={width} height={height}>
      {handleIconType(name)}
    </StyledIcon>
  </>
);

Icon.propTypes = {
  name: PropTypes.oneOf(['pencil', 'union', 'settings', 'gps', 'arrowUp', 'arrowDown']),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  name: 'union',
  color: ({ theme }) => theme.colorBlack,
  width: '2rem',
  height: '2rem',
};

export default Icon;
