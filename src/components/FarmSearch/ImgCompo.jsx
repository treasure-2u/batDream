// img자체 임포트 , public
// pub 이미지 디렉토리 만들고 그 안에 각자 페이지별로 디렉토리를 만들어서 경로로 사용
import { imgArr } from '../../utils/imgarr';

export default function ImgCompo() {
  const randomIndex = Math.floor(Math.random() * imgArr.length);
  const randomImage = imgArr[randomIndex];

  return (
    <div className="searchImg">
      <img
        key={randomIndex}
        src={`/img/farmImges/farmImg${randomImage}.jpg`}
        alt={`Image ${randomIndex}`}
        className="farm-image"
      />
    </div>
  );
}
