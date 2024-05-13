import React from 'react';
import '../../styles/Plant/Pagenation.scss';

const PageNation = ({ totalPages, currentPageNum, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPage = Math.min(totalPages, 5); // 최대 10개 페이지만 표시
    const startPage = Math.max(1, currentPageNum - 4); // 현재 페이지 기준으로 앞쪽에서 4페이지까지 표시
    const endPage = Math.min(totalPages, startPage + 4); // 시작 페이지부터 10페이지까지 표시
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={i === currentPageNum ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPageNum === 1}
        onClick={() => onPageChange(currentPageNum - 1)}
      >
        이전
      </button>
      {getPageNumbers()}
      <button
        disabled={currentPageNum === totalPages}
        onClick={() => onPageChange(currentPageNum + 1)}
      >
        다음
      </button>
    </div>
  );
};

export default PageNation;
