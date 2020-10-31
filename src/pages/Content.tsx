import React, { useState, useEffect } from 'react'
import { contentInterface } from '../utils/interfaces'
import { fetchContentList } from '../utils/services'
import ContentList from '../components/ContentList/ContentList'
import Pagination from '../components/Pagination/Pagination'
import SearchBar from '../components/SearchBar/SearchBar'

const initState: contentInterface[] = []

export default function Content() {
  const [contentList, setContentList] = useState(initState)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchContentList(search, page)
      .then(({ contentList, totalPages, status }) => {
        if (status === 'ok' && contentList.length) {
          setError('')
          setContentList(contentList)
          setTotalPages(totalPages)
        } else {
          const apiStatus = (status === "ok") ? '' : `API status: ${status}.`
          setError(`No results found. ${apiStatus}`)
        }
      })
  }, [search, page])

  return (
    <main>
      <SearchBar setSearch={setSearch} />
      {error
        ? <p>{error}</p>
        : (<>
          <ContentList contentList={contentList} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>)
      }

    </main>
  );
}