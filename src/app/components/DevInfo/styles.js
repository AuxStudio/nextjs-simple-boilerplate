import css from 'styled-jsx/css';

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 2;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
    background-color: ${colors.transBlack};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    display: flex;
  }

  .spacer {
    width: ${rhythm.hz}px;
  }
`;

export default styles;
