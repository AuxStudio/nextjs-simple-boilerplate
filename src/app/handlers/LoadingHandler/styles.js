import css from 'styled-jsx/css';

const styles = css`
  .linear-progress-container {
    z-index 1301; /* get above the ridiculous material-ui modal z-index */
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
`;

export default styles;
