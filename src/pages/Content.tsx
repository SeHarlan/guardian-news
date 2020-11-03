import React, { useState, useEffect } from 'react'
import { fetchContentList } from '../utils/services'
import ContentList from '../components/ContentList/ContentList'
import Pagination from '../components/Pagination/Pagination'
import SearchBar from '../components/SearchBar/SearchBar'

import { initState, useSetCache, useCache } from '../utils/useContext'
import { contentInterface } from '../utils/interfaces'

const initStateList = [initState]

export default function Content() {
  const [contentList, setContentList] = useState(initStateList)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [orderBy, setOrderBy] = useState('relevance')

  const setCache = useSetCache()
  const cache = useCache()
  const cachedContent = cache[search + orderBy + page]

  useEffect(() => {
    if (cachedContent) {
      setContentList(cachedContent as contentInterface[])
      console.log('cached Content', cachedContent)
      return
    }

    console.log("fetching Content")
    fetchContentList(search, orderBy, page)
      .then(({ contentList, totalPages, status }) => {
        if (status === 'ok' && contentList.length) {
          setError('')
          setContentList(contentList)
          setTotalPages(totalPages)

          setCache((prev) => ({ ...prev, [search + orderBy + page]: contentList }))
        } else {
          const apiStatus = (status === "ok") ? '' : `API status: ${status}.`
          setError(`No results found. ${apiStatus}`)
        }
      })
      .catch(err => console.log(err))
  }, [search, page, orderBy, cachedContent, setCache])

  return (
    <main>
      <SearchBar setSearch={setSearch} orderBy={orderBy} setOrderBy={setOrderBy} />
      {error
        ? <p className="error">{error}</p>
        : (<>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          <ContentList contentList={contentList} />
        </>)
      }

    </main>
  );
}