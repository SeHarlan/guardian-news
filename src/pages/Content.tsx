import React, { useState, useEffect } from 'react'
import { contentInterface } from '../utils/interfaces'
import { fetchContentList } from '../utils/services'
import ContentList from '../components/ContentList/ContentList'
import Pagination from '../components/Pagination/Pagination'

const initState: contentInterface[] = []

export default function Content() {
  const [contentList, setContentList] = useState(initState)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchContentList(page)
      .then(response => {
        setContentList(response.contentList)
        setTotalPages(response.totalPages)
      })
  }, [page])

  return (
    <main>
      <ContentList contentList={contentList} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </main>
  );
}