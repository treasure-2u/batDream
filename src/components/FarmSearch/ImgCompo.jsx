const ImgCompo = ({ farm }) => {
  return (
    <div>
      <img src={farm.imgUrl} alt={`Farm Image`} className="farm-image" />
      <div className="farmSearchContent">
        <div className="farmSearchContent">
          <div>
            <p>농장명: {farm.FARM_NAME._text}</p>
            <p>주소: {farm.ADDRESS._text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgCompo;
