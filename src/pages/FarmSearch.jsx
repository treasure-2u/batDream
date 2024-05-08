// 주말농장 상세 - 농장 찾기
import NameFilterCompo from '../components/FarmSearch/NameFilterCompo';
import ImgCompo from '../components/FarmSearch/ImgCompo';
import AreaFilterCompo from '../components/FarmSearch/AreaFilterCompo';
import { Pagination } from '../components/FarmSearch/Pagination';

export default function FarmSearch() {
  return (
    <div>
      <NameFilterCompo />
      <AreaFilterCompo />
      <ImgCompo />
      <Pagination />
    </div>
  );
}
