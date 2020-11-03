import React from 'react'
import { contentInterface } from '../../utils/interfaces'
import image from '../../assets/default.png'
import { onErrorImage, replaceChar } from '../../utils/services'
import { Link } from 'react-router-dom'

import styles from './contentList.module.css'

interface contentListProps {
  contentList: contentInterface[]
}

export default function ContentList({ contentList }: contentListProps) {

  return (<ol className={styles.list}>
    {contentList.map(({ id, webTitle, fields, webPublicationDate }) => {
      const passableID = id?.replace(/\//g, replaceChar)
      const date = new Date(webPublicationDate)
      return (<li className={styles.item} key={id}>
        <Link to={`/article/${passableID}`}>
          <img className={styles.image} src={fields?.thumbnail || image} onError={onErrorImage} alt="" />
          <i className={styles.date}>{date.toDateString()}</i>
          <h3 className={styles.title}>{webTitle}</h3>
        </Link>
      </li>)
    })
    }
  </ol>)
}