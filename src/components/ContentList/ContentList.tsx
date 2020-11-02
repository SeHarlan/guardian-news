import React from 'react'
import { contentInterface } from '../../utils/interfaces'
import image from '../../assets/default.png'
import { onErrorImage, replaceChar } from '../../utils/services'
import { Link } from 'react-router-dom'

interface contentListProps {
  contentList: contentInterface[]
}

export default function ContentList({ contentList }: contentListProps) {

  return (<ol>
    {contentList.map(({ id, webTitle, fields, webPublicationDate }) => {
      const passableID = id?.replace(/\//g, replaceChar)
      const date = new Date(webPublicationDate)
      return (<li key={id}>
        <Link to={`/article/${passableID}`}>
          <h3>{webTitle}</h3>
          <i>{date.toDateString()}</i>
          <img src={fields?.thumbnail || image} onError={onErrorImage} alt="" />
        </Link>
      </li>)
    })
    }
  </ol>)
}