import { contentInterface } from "./interfaces"

const key = `api-key=${process.env.REACT_APP_GUARDIAN_KEY}`

const guardianURL = "https://content.guardianapis.com/"

export function fetchContentList() {
  return fetch(`${guardianURL}search?${key}`)
    .then(res => res.json())
    .then(({ response }) => {
      return response.results as contentInterface[]
    })
}