import css from 'styled-jsx/css';

import { styleConstants } from '../../../config';

const { rhythm } = styleConstants;

const styles = css.global`
  .flex {
    display: flex;
    flex-direction: column;
  }

  .row {
    flex-direction: row;
    align-items: center;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .flex-center {
    justify-content: center;
    align-items: center;
  }

  .shadow-sm {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  .shadow-md {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .shadow-lg {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  .shadow-hover, .shadow-hover-lg {
    transition: box-shadow 0.5s ease;
  }

  .shadow-hover:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .shadow-hover-lg:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .clickable {
    cursor: pointer;
  }

  .spacer-hz {
    min-width: ${rhythm.hz}px;
  }

  .spacer-hz.small  {
    min-width: ${rhythm.hz / 2}px;
  }

  .spacer-hz.large {
    min-height: ${rhythm.hz * 2}px;
  }

  .spacer-vt {
    min-height: ${rhythm.vt}px;
    width: 100%;
  }

  .spacer-vt.small {
    min-height: ${rhythm.vt / 2}px;
    width: 100%;
  }

  .spacer-vt.large {
    min-height: ${rhythm.vt * 2}px;
  }

  .hidden {
    display: none;
  }

  .fixed {
    position: fixed;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .stretch {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media (max-width: 543px) {
    .xs-wrap {
      flex-wrap: wrap;
    }
    .hidden-xs-down {
      display: none;
    }
  }

  @media (min-width: 544px) {
    .hidden-xs-up {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .hidden-md-down {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .hidden-md-up {
        display: none;
    }
  }
`;

export default styles;
