// SortButton.jsx
import React from 'react';

const SortButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      정렬
    </button>
  );
};

export default SortButton;
