import { useLocation } from 'react-router-dom';
import FarmInfoContainer from '../components/FarmInfo/FarmInfoContainer';

const App = () => {
  const location = useLocation();

  return (
    <>
      <div className="farmInfoTitle">주말농장 상세정보</div>
      <FarmInfoContainer imgUrl={location.state?.imgUrl} />
    </>
  );
};

export default App;
