import css from 'styled-jsx/css'; // eslint-disable-line

import { styleConstants } from '../../config';

const { colors } = styleConstants;

const SIZE = 40;
const SMALL_SIZE = 15;
const BORDER_SIZE = SIZE / 10;
const SMALL_BORDER_SIZE = 3;

const styles = css`
  .container {
    border-width: ${BORDER_SIZE}px;
    border-style: solid;
    border-color: ${colors.lightGrey};
    border-top-color: ${colors.accent2};
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
    z-index: 1;
  }

  .small {
    border-width: ${SMALL_BORDER_SIZE}px;
    width: ${SMALL_SIZE}px;
    height: ${SMALL_SIZE}px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default styles;
