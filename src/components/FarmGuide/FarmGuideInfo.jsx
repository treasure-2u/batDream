// FarmGuideInfo.jsx
import React from 'react';
import '../../styles/FarmSearch/FarmGuideInfo.scss';

// 주말 농장 가이드 목데이터
const farmGuideRules = [
  '덩굴로 기는 작물과 키가 큰 작물은 심지 말자',
  '사용한 농기구는 세척하여 제자리에 두자',
  '미숙 퇴비 주면 분해 과정에 악취가 난다',
  '경계를 위한 줄을 쳐서 농장을 지저분하게 한다',
  '다른 사람의 밭도 내 밭같이 소중히 여기자',
  '쉼터는 깨끗이 사용하고 가져온 쓰레기는 집으로 가져가자',
];

// 가이드 규칙을 표시하는 컴포넌트
function FarmGuideInfo() {
  return (
    <div className="FarmGuideBox">
      <h2>주말 농장 이용 참여회원의 에티켓</h2>
      <ul>
        {farmGuideRules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}

export default FarmGuideInfo;
