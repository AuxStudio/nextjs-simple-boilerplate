import css from 'styled-jsx/css';

import { colors, rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 64px 0 0; /* Header height */
    background-color: ${colors.lightGrey};
  }

  .content-container {
    max-width: ${sizes.maxContentWidth}px;
    width: 100%;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${rhythm.vt * 2}px ${rhythm.hz}px;
    background-color: white;
    align-items: stretch;
  }

  .footer-container {
  }

  .dev-info-container {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  @media (min-width: ${sizes.maxContentWidth}px) {
    .content-container {
      padding: ${rhythm.vt * 4}px ${rhythm.hz * 2}px;
    }
  }
`;

export default styles;
