import { Dispatch, SetStateAction, ReactChild } from "react";

export interface contentInterface {
  id: string
  sectionId: string
  sectionName: string,
  webPublicationDate: string,
  webTitle: string,
  webUrl: string,
  apiUrl: string,
  fields: {
    thumbnail: string
    body: string
  }
}

export interface listInterface {
  contentList: contentInterface[],
  totalPages: number
}

export interface Cache {
  [key: string]: contentInterface | listInterface
}
export interface Children {
  children: ReactChild
}

export type reducerStateType = {
  setCache: Dispatch<SetStateAction<Cache>>
  cache: Cache
}

