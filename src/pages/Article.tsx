import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleItem from '../components/ArticleItem/ArticleItem'
import { fetchArticleItem } from '../utils/services'
import { contentInterface } from '../utils/interfaces'
import image from '../assets/default.png'

const initState: contentInterface = {
  id: '',
  sectionId: '',
  sectionName: '',
  webTitle: '...loading',
  webUrl: '',
  apiUrl: '',
  fields: {
    thumbnail: image,
    body: ''
  }
}

export default function Article() {
  const [article, setArticle] = useState(initState)
  const { id }: { id: string } = useParams()

  useEffect(() => {
    fetchArticleItem(id)
      .then(({ article }) => {
        setArticle(article)
      })
  }, [id])

  return (<main>
    <ArticleItem article={article} />
  </main>)
}