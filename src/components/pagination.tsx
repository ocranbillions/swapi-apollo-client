import React from 'react';
import { Link } from "react-router-dom";

// Helper method to return page number e.g (page=1)
const getParamsFromLink = (url = '') => url.split('?')[1]

const Pagination = (props: any) => {
  const { pageInfo } = props;
  const { totalPeople, nextPage, previousPage, pageNumber } = pageInfo;

  const ITEMS_PER_PAGE = 10;
  const currentPageNumber = pageNumber ? pageNumber : 1;
  const totalNumOfPages = Math.ceil(parseInt(totalPeople) / ITEMS_PER_PAGE);

  return (
    <div>
      <h3>{`Viewingsss page ${currentPageNumber} of ${totalNumOfPages}`}</h3>
      <div>
        {previousPage && (
          <Link to={`/?${getParamsFromLink(previousPage)}`}>Previous</Link>
        )}
        {nextPage && (
          <Link to={`/?${getParamsFromLink(nextPage)}`}>Next</Link>
        )}
      </div>
    </div>
  )
}

export default Pagination;