import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function NavbarDarkExample({ onItemClick }) {
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        병해충별 도감정보
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleItemClick('병')}>병</Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('병원체')}>
          병원체
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleItemClick('곤충')}>
          곤충
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavbarDarkExample;
