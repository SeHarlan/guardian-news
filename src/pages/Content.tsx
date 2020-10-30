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

  useEffect(() => {
    fetchContentList(search, page)
      .then(response => {
        setContentList(response.contentList)
        setTotalPages(response.totalPages)
      })
  }, [search, page])

  return (
    <main>
      <SearchBar search={search} setSearch={setSearch} />
      <ContentList contentList={contentList} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </main>
  );
}