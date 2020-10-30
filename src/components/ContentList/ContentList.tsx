import React from 'react'
import { contentInterface } from '../../utils/interfaces'

interface contentListProps {
  contentList: contentInterface[]
}

export default function ContentList({ contentList }: contentListProps) {
  return (<ol>
    {contentList.map(({ id, webTitle, apiUrl }) => (
      <li key={id}>
        {/* router link to this localurl/content/apiURL */}
        <h3>{webTitle}</h3>
      </li>
    ))}
  </ol>)
}