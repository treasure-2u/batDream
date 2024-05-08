import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <ReactPaginate
      pageCount={Math.ceil(20 / 10)}
      pageRangeDisplayed={10}
      marginPagesDisplayed={0}
      breakLabel={''}
      previousLabel={'이전'}
      nextLabel={'다음'}
      onPageChange={() => console.log('aa')}
      containerClassName={'pagination-ul'}
      activeClassName={'currentPage'}
      previousClassName={'pageLabel-btn'}
      nextClassName={'pageLabel-btn'}
    />
  );
};

export default Paging;
