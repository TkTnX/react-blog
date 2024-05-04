import React from "react";
import ReactPaginate from "react-paginate";

import leftImg from "./images/left.svg";
import rightImg from "./images/right.svg";
import "./style.css";
type PaginationProps = {
  setCurrentPage: (event: any) => void;
  pageCount: number;
};

const Pagination: React.FC<PaginationProps> = ({
  setCurrentPage,
  pageCount,
}) => {
  return (
    <div>
      <ReactPaginate
        className="flex items-center gap-3  pagination justify-center  vsm:mt-36 vsm:justify-start"
        breakLabel="..."
        nextLabel={<img src={rightImg} />}
        onPageChange={(event) => setCurrentPage(event.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<img src={leftImg} />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
