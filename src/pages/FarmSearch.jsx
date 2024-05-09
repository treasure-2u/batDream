// 주말농장 상세 - 농장 찾기
import NameFilterCompo from '../components/FarmSearch/NameFilterCompo';
import ImgCompo from '../components/FarmSearch/ImgCompo';
import AreaFilterCompo from '../components/FarmSearch/AreaFilterCompo';
import Paging from '../components/FarmSearch/Paging';
import Header from '../components/Header/Header';

export default function FarmSearch() {
  const imgComponents = Array.from({ length: 4 }, (_, index) => (
    <ImgCompo key={index} />
  ));

  return (
    <div>
      <NameFilterCompo />
      <AreaFilterCompo />
      {imgComponents}
      <Paging />
    </div>
  );
}
