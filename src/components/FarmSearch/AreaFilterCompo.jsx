export default function AreaFilterCompo({ handleAreaChange }) {
  const handleSelectChange = (event) => {
    const selectedArea = event.target.value;
    handleAreaChange(selectedArea);
  };
  return (
    <div>
      <div className="filter areaFilter">
        <div className="name filterArea">지역ㅤ</div>
        <select
          className="selectBox"
          defaultValue=""
          onChange={handleSelectChange}
        >
          <option disabled value="">
            지역을 선택하세요.
          </option>
          <option value="옥길동">옥길동</option>
          <option value="하안동">하안동</option>
          <option value="노온사동">노온사동</option>
        </select>
      </div>
    </div>
  );
}
