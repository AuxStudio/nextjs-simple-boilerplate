import css from 'styled-jsx/css';

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: ${sizes.maxContentWidth}px;
    margin: 0 auto;
    width: 100%;
  }

  .center {
    align-items: center;
  }

  .input-container {
    margin-bottom: ${rhythm.vt}px;
    width: 100%;
    background-color: white;
    border-radius: ${sizes.borderRadius}px;
  }

  .footer-text-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .buttons-container {
    display: flex;
  }

  .secondary-button-container {
    margin-left: ${rhythm.hz / 2}px;
  }
`;

export default styles;
