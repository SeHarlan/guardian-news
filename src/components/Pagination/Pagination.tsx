import React from 'react'

import styles from './pagination.module.css'

import { pagingLimit } from '../../utils/services'

interface paginationProps {
  page: number,
  setPage: Function,
  totalPages: number
}

export default function Pagination({ page, setPage, totalPages }: paginationProps) {

  const lastPage = totalPages > pagingLimit ? pagingLimit : totalPages

  return (<div className={styles.pagination}>
    <button
      disabled={page === 1}
      onClick={() => setPage(1)}
    >&#8676;</button>
    <button
      disabled={page <= 1}
      onClick={() => setPage((prev: number) => prev - 1)}
    >&#8592;</button>
    <i className={styles.pages}>{page} / {lastPage}</i>
    <button
      disabled={page >= totalPages || page >= pagingLimit}
      onClick={() => setPage((prev: number) => prev + 1)}
    >&#8594;</button>
    <button
      disabled={page === lastPage}
      onClick={() => setPage(lastPage)}
    >&#8677;</button>
  </div>)
}