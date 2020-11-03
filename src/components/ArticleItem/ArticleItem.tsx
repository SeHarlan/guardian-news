import React from 'react'
import { contentInterface } from '../../utils/interfaces';
import { onErrorImage } from '../../utils/services';
import DOMPurify from 'dompurify';

import styles from './articleItem.module.css'
import image from '../../assets/default.png'

export default function ArticleItem({ article }: { article: contentInterface }) {
  const { webTitle, fields, webPublicationDate } = article

  const date = new Date(webPublicationDate)

  return (<>
    <h2 className={styles.title}>{webTitle}</h2>
    <i className={styles.date}>~ {
      (date.toDateString() === 'Invalid Date')
        ? '^_^'
        : date.toDateString()
    } ~</i>
    <img className={styles.image} src={fields?.thumbnail || image} onError={onErrorImage} alt="" />
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(fields.body) }}></article>
  </>)
}