import React from 'react';
import PropTypes from 'prop-types';

export const SearchIcon = ({ color, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <path d="M19.427 21.427a8.5 8.5 0 112-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 01-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
)

SearchIcon.defaultProps = {
  color: 'black',
  size: 32,
};

SearchIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}