import css from 'styled-jsx/css';

import { colors } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    background-color: ${colors.transWhite};
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export default styles;
