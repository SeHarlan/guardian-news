import { contentInterface } from "./interfaces"

const key = `api-key=${process.env.REACT_APP_GUARDIAN_KEY}`

const guardianURL = "https://content.guardianapis.com/"

export function fetchContentList(search: string, page: number) {
  return fetch(`${guardianURL}search?${key}&q=${search}&page=${page}`)
    .then(res => res.json())
    .then(({ response }) => ({
      contentList: response.results as contentInterface[],
      totalPages: response.pages as number,
      status: response.status as string
    }))
    .catch(err => err)
}