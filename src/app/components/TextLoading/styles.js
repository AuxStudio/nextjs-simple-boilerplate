import css from 'styled-jsx/css';

import { colors, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
  }

  .container {
    background-color: ${colors.grey};
    height: 100%;
    border-radius: ${sizes.borderRadius}px;
    animation: pulse 1.5s infinite;

    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export default styles;
