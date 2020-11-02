import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleItem from '../components/ArticleItem/ArticleItem'
import { fetchArticleItem } from '../utils/services'
import { contentInterface } from '../utils/interfaces'
import image from '../assets/default.png'

export const initState: contentInterface = {
  id: '',
  sectionId: '',
  sectionName: '',
  webTitle: '...loading',
  webPublicationDate: '',
  webUrl: '',
  apiUrl: '',
  fields: {
    thumbnail: image,
    body: ''
  }
}

export default function Article() {
  const [article, setArticle] = useState(initState)
  const [error, setError] = useState('')
  const { id }: { id: string } = useParams()

  useEffect(() => {
    fetchArticleItem(id)
      .then(({ article, status }) => {
        if (status === 'ok' && article) {
          setError('')
          setArticle(article)
        } else {
          const apiStatus = (status === "ok") ? '' : `API status: ${status}.`
          setError(`Something has gone wrong. ${apiStatus}`)
        }
      })
      .catch(err => console.log(err))

  }, [id])

  return (<main>

    {error
      ? <p className="error">{error}</p>
      : (<ArticleItem article={article} />)
    }
  </main>)
}