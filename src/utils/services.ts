import { SyntheticEvent } from "react"
import { contentInterface } from "./interfaces"

import image from '../assets/default.png'

const key = `api-key=${process.env.REACT_APP_GUARDIAN_KEY}`
const guardianURL = "https://content.guardianapis.com/"

export const replaceChar = '_'

export function fetchContentList(search: string, page: number) {
  return fetch(`${guardianURL}search?${key}&q=${search}&page=${page}&show-fields=thumbnail`)
    .then(res => res.json())
    .then(({ response }) => ({
      contentList: response.results as contentInterface[],
      totalPages: response.pages as number,
      status: response.status as string,
    }))
    .catch(err => err)
}

export function fetchArticleItem(id: string) {

  const reg = new RegExp(replaceChar, "g")
  const articleURL = id.replace(reg, '/')

  return (fetch(`${guardianURL}${articleURL}?${key}&show-fields=thumbnail,body`))
    .then(res => res.json())
    .then(({ response }) => ({
      status: response.status as string,
      article: response.content as contentInterface
    }))
    .catch(err => err)
}

export function onErrorImage(event: SyntheticEvent<HTMLImageElement, Event>) {
  event.currentTarget.src = image
}