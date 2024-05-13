// 주말농장 상세 - 가이드 (에티켓 등)

import React from 'react';
import FarmGuideInfo from '../components/FarmGuide/FarmGuideInfo';
import ShapeExample from '../components/FarmGuide/ShapeExample';
import QuizGame from '../components/FarmGuide/QuizGame';
import '../styles/FarmSearch/FarmGuideInfo.scss';

export default function FarmGuide() {
  return (
    <div>
      <FarmGuideInfo />
      <ShapeExample />
      <QuizGame />
    </div>
  );
}
