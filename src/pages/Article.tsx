import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleItem from '../components/ArticleItem/ArticleItem'
import { fetchArticleItem } from '../utils/services'

import BackToTop from '../components/BackToTop/BackToTop'
import { useSetCache, initState, useCache } from '../utils/useContext'
import { contentInterface } from '../utils/interfaces'



export default function Article() {
  const [article, setArticle] = useState(initState)
  const [error, setError] = useState('')
  const { id }: { id: string } = useParams()

  const [cached, setCached] = useState(false)
  const setCache = useSetCache()
  const cache = useCache()

  useEffect(() => {
    const cashedArticle = cache[id]
    if (cashedArticle) {
      setCached(true)
      setArticle(cashedArticle as contentInterface)
    }
    console.log('cached', cashedArticle)
  }, [id, cache])

  useEffect(() => {
    if (cached) return
    console.log("fetching")
    fetchArticleItem(id)

      .then(({ article, status }) => {
        if (status === 'ok' && article) {
          setError('')
          setArticle(article)

          setCache((prev) => ({ ...prev, [id]: article }))

        } else {
          const apiStatus = (status === "ok") ? '' : `API status: ${status}.`
          setError(`Something has gone wrong. ${apiStatus}`)
        }
      })
      .catch(err => console.log(err))

  }, [id, setCache, cached])

  return (<main>
    <BackToTop />

    {error
      ? <p className="error">{error}</p>
      : (<ArticleItem article={article} />)
    }
  </main>)
}