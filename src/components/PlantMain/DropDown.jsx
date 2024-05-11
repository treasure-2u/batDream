import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function ButtonDarkExample({ onSelect }) {
  const [selectedCategory, setSelectedCategory] = useState('품종'); // 선택된 카테고리 상태 추가

  // 드롭다운 항목을 선택했을 때 실행되는 함수
  const handleDropdownSelect = (eventKey) => {
    setSelectedCategory(eventKey); // 선택된 항목으로 설정
    onSelect(eventKey); // 선택된 항목을 상위 컴포넌트로 전달
  };

  return (
    <>
      {/* 수정된 부분: onSelect 핸들러 추가 */}
      <Dropdown data-bs-theme="dark" onSelect={handleDropdownSelect}>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          {selectedCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" eventKey="식물" active>
            식물
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2" eventKey="채소">
            채소
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3" eventKey="과일">
            과일
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4" eventKey="농작물">
            농작물
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDarkExample;
