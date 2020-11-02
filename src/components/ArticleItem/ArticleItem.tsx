import React from 'react'
import { contentInterface } from '../../utils/interfaces';
import { onErrorImage } from '../../utils/services';
import DOMPurify from 'dompurify';

import styles from './articleItem.module.css'

import image from '../../assets/default.png'


export default function ArticleItem({ article }: { article: contentInterface }) {
  const { webTitle, fields, webPublicationDate } = article

  const date = new Date(webPublicationDate)

  return (<div>
    <h2 className={styles.title}>{webTitle}</h2>
    <i className={styles.date}>~ {date.toDateString()} ~</i>
    <img className={styles.image} src={fields?.thumbnail || image} onError={onErrorImage} alt="" />
    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(fields.body) }}></p>
  </div>)
}