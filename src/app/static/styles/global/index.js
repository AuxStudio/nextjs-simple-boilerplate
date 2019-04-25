import css from 'styled-jsx/css';

import { colors } from '../styleConstants';

const styles = css.global`
  * {
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  ul, figure {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: 'Helvetica', 'Arial', sans-serif;
  }

  button:disabled, button:disabled > .clickable {
    cursor: not-allowed;
  }

  button:focus, .button:focus, a:focus, input:focus, select:focus, div[role='button']:focus {
    outline: 2px solid ${colors.secondary};
  }
`;

export default styles;
