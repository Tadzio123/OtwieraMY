import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
`;

const ProgressLabel = styled.label`
    display: flex;
    flex-direction: column;
`;

const ProgressBar = styled.progress`
    width: 36rem;
    height: 0.4rem;
    border-radius: 0px;
    &::-webkit-progress-value{
        background-color: ${({ theme }) => theme.colorPrimary};
    }
    &::-webkit-progress-bar {
        background-color: ${({ theme }) => theme.colorGray30};
    }
`;

/* eslint-disable consistent-return */
const handleProgressType = (type, percent) => {
  if (type === 'bar') {
    return (
      <Container>
        <ProgressLabel>
          {percent}
          %
          <ProgressBar value={percent} max="100" />
        </ProgressLabel>
      </Container>
    );
  } if (type === 'ring') {
    return (
      <Container>
        { percent }
        %
        <ProgressRing value={percent}>
          <circle r="27.5" cx="29.5" cy="29.5" />
        </ProgressRing>
      </Container>
    );
  }
};

const ProgressRing = styled.svg`
    width: 6rem;
    height: 6rem;
    ${'' /* Path style */}
    circle {
        stroke-width: 4;
        stroke: ${({ theme }) => theme.colorPrimary};
        fill: transparent;
        stroke-dasharray: 1000;
        stroke-dashoffset: ${({ value }) => 1000 - (173 * value) / 100};
        transform: rotate(-90deg);
        transform-origin: center;
        transition: stroke-dashoffset 0.45s;
    }
`;

const Progress = ({
  type, percent,
}) => (
  handleProgressType(type, percent)
);

Progress.propTypes = {
  type: PropTypes.oneOf(['bar', 'ring']),
  percent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

Progress.defaultProps = {
  type: 'bar',
};

export default Progress;
