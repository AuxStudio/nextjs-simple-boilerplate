import React from 'react';
import PropTypes from 'prop-types';

import { rhythm } from '../../static/styles/styleConstants';
import styles from './styles';

/*
 * FIXME: size could be object of responsive breakpoints
 * FIXME: Separate item component out
 * External gutter width
 * Gutter is component (vt and hz)
 */

const Grid = ({ size, gutterSize, children }) => {
  return (
    <div className="container">
      {children.map((item) => {
        const { key } = item;

        return (
          <div key={key} className="item-container">
            {item}
          </div>
        );
      })}

      <style jsx>
        {`
          .item-container {
            width: calc(${100 / size}% - ${((size - 1) * gutterSize) / size}px) !important;
            margin-right: ${gutterSize}px;
          }

          .item-container:nth-child(${size}n) {
            margin-right: 0;
          }
        `}
      </style>

      <style jsx>{styles}</style>
    </div>
  );
};

Grid.propTypes = {
  size: PropTypes.number,
  gutterSize: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string.isRequired })),
};
Grid.defaultProps = {
  size: 1,
  gutterSize: rhythm.vt,
};

export default Grid;
