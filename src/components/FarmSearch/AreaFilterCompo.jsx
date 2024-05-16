export default function AreaFilterCompo() {
  return (
    <div>
      <div className="filter areaFilter">
        <div className="name filterArea">지역ㅤ</div>
        <select className="selectBox" defaultValue="">
          <option disabled value="">
            지역을 선택하세요.
          </option>
          <option value="옥길동">옥길동</option>
          <option value="하안동">하안동</option>
          <option value="노은사동">노은사동</option>
        </select>
      </div>
    </div>
  );
}
