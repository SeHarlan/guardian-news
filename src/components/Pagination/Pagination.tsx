import React from 'react'

import styles from './pagination.module.css'

interface paginationProps {
  page: number,
  setPage: Function,
  totalPages: number
}

const pagingLimit = 3800

export default function Pagination({ page, setPage, totalPages }: paginationProps) {

  const lastPage = totalPages > pagingLimit ? pagingLimit : totalPages

  return (<div className={styles.pagination}>
    <button onClick={() => setPage(1)}>First</button>
    <button disabled={page <= 1} onClick={() => setPage((prev: number) => prev - 1)}>Previous</button>
    <span> {page} / {lastPage} </span>
    <button disabled={page >= totalPages || page >= pagingLimit} onClick={() => setPage((prev: number) => prev + 1)}>Next</button>
    <button onClick={() => setPage(lastPage)}>Last</button>
  </div>)
}