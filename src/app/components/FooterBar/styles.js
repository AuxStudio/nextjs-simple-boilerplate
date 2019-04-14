import css from 'styled-jsx/css';

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: ${rhythm.vt * 2}px ${rhythm.hz}px;
  }

  .content-container {
    max-width: ${sizes.maxContentWidth}px;
    display: flex;
    align-items: center;
  }
`;

export default styles;
