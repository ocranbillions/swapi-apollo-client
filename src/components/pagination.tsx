import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { CustomThemeI, PaginationI } from '../@types';

// Helper method to return page number e.g (page=1)
const getParamsFromLink = (url = '') => url?.split('?')[1]

const useStyles = createUseStyles((theme: CustomThemeI) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px 0px'
  },
  pageCount: {
    margin: '0px 20px'
  },
  btn: {
    background: theme.colors.lightBlack,
    padding: '10px 20px',
    borderRadius: 5,
    textDecoration: 'none',
    '&:hover': {
      background: theme.colors.darkBlack,
    }
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 0.3
  },
}));


const Pagination = (props: PaginationI) => {
  const s = useStyles();

  const { pageInfo } = props;
  const { totalPeople, nextPage, previousPage, pageNumber } = pageInfo;

  const ITEMS_PER_PAGE = 10;
  const currentPageNumber = pageNumber ? pageNumber : 1;
  const totalNumOfPages = Math.ceil(parseInt(totalPeople) / ITEMS_PER_PAGE);

  return (
    <div className={s.container}>
      <Link 
        to={`/?${getParamsFromLink(previousPage)}`} 
        className={clsx(s.btn, !previousPage && s.disabled)}
      >
        Prev
      </Link>
      <h3 className={s.pageCount}>
        {`Page ${currentPageNumber} of ${totalNumOfPages}`}
      </h3>
      <Link 
        to={`/?${getParamsFromLink(nextPage)}`} 
        className={clsx(s.btn, !nextPage && s.disabled)}
      >
        Next
      </Link>
    </div>
  )
}

export default Pagination;