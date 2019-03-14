import css from 'styled-jsx/css'; // eslint-disable-line

import { styleConstants } from '../../config';

const { rhythm, colors } = styleConstants;
const HEIGHT = 40;
const TRANSLATE = 100;

const styles = css`
  .wrapper {
    position: fixed;
    top: ${rhythm.vt}px;
    right: ${rhythm.hz}px;
    background-color: ${colors.transBlack};
    z-index: 2;
    transition: transform 0.5s ease;
    animation: translate-left 0.5s ease;
    height: ${HEIGHT}px;
    justify-content: center;
  }

  .animate-in {
    transform: translateY(0);
  }

  .animate-out {
    transform: translateY(-${TRANSLATE}px);
  }

  .container {
    position: relative;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
  }

  @keyframes translate-left {
    from {
      transform: translateY(-${TRANSLATE}px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export default styles;
