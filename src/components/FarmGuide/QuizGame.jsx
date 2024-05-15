// QuizGame.js

import React, { useState } from 'react';

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const questions = [
    {
      question: '농장에서 어떤 작물이 가장 많이 재배되나요?',
      options: ['감자', '토마토', '배추', '사과'],
      answer: '감자',
    },
    {
      question: '농장에서 어떤 동물이 가장 많이 키워지나요?',
      options: ['양', '소', '돼지', '닭'],
      answer: '닭',
    },
    {
      question: '농장에서 대표적으로 볼 수 있는 색상은 무엇인가요?',
      options: ['빨강', '파랑', '초록', '노랑'],
      answer: '초록',
    },
    {
      question: '농장에서 주로 사용되는 용품은 무엇인가요?',
      options: ['컴퓨터', '삽', '책상', '스마트폰'],
      answer: '삽',
    },
    {
      question:
        '농장에서 생산되는 것 중 주로 농가 직거래로 이루어지는 것은 무엇인가요?',
      options: ['우유', '휴대폰', '신문', '의자'],
      answer: '우유',
    },
    {
      question: '농장에서 가장 많이 사용되는 에너지원은 무엇인가요?',
      options: ['태양광', '원자력', '석유', '바람'],
      answer: '태양광',
    },
    {
      question: '농장에서 물을 절약하기 위해 사용되는 시스템은 무엇인가요?',
      options: ['분수', '수영장', '분빗물 저장탱크', '물놀이터'],
      answer: '빗물 저장탱크',
    },
    {
      question: '농장에서 가장 중요한 환경 보호 활동은 무엇인가요?',
      options: [
        '대중교통 이용',
        '폐기물 분리 수거',
        '쓰레기를 버리지 않기',
        '플라스틱 사용 줄이기',
      ],
      answer: '플라스틱 사용 줄이기',
    },
    {
      question: '농장에서 가장 중요한 자원 관리 활동은 무엇인가요?',
      options: ['친환경 건축', '나무 심기', '토양 보전', '고무장갑 사용'],
      answer: '토양 보전',
    },
    {
      question: '농장에서 가장 중요한 생물 다양성 보전 활동은 무엇인가요?',
      options: ['잡초 제거', '비료 사용', '자연 생태계 보호', '농약 사용'],
      answer: '자연 생태계 보호',
    },
  ];

  const handleAnswerClick = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // 다음 문제로 넘어감
    setCurrentQuestion(currentQuestion + 1);
    // 선택된 옵션 초기화
    setSelectedOption('');
  };

  return (
    <div className="QuizBox">
      {currentQuestion < questions.length ? (
        <div>
          <h2>퀴즈 게임</h2>
          <p>질문: {questions[currentQuestion].question}</p>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div className="QuizContainer" key={index}>
                <label>
                  <input
                    className="Radio"
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
          <button onClick={handleAnswerClick} disabled={!selectedOption}>
            다음 문제
          </button>
          <p>점수: {score}</p>
        </div>
      ) : (
        <div>
          <h2>퀴즈 게임 종료</h2>
          <p>최종 점수: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
