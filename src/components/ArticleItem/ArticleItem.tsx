import React from 'react'
import { contentInterface } from '../../utils/interfaces';
import { onErrorImage } from '../../utils/services';
import DOMPurify from 'dompurify';

import image from '../../assets/default.png'


export default function ArticleItem({ article }: { article: contentInterface }) {
  const { webTitle, fields } = article

  return (<div>
    <h2>{webTitle}</h2>
    <img src={fields?.thumbnail || image} onError={onErrorImage} alt="" />
    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(fields.body) }}></p>
  </div>)
}