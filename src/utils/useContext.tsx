import React, { createContext, useContext, useState, SetStateAction } from 'react'
import { contentInterface, Cache, Children, reducerStateType } from './interfaces'
import image from '../assets/default.png'

export const initState: contentInterface = {
  id: '',
  sectionId: '',
  sectionName: '',
  webTitle: '...loading',
  webPublicationDate: '',
  webUrl: '',
  apiUrl: '',
  fields: {
    thumbnail: image,
    body: ''
  }
}

const initCacheState: Cache = {
  object: initState,
  array: {
    contentList: [initState],
    totalPages: 1
  }
}
const initContext = {
  setCache: (value: SetStateAction<Cache>) => { },
  cache: initCacheState
}

const Context = createContext<reducerStateType>(initContext)


export default function Provider({ children }: Children) {
  const [cache, setCache] = useState(initCacheState)

  return (
    <Context.Provider value={{ cache, setCache }}>
      {children}
    </Context.Provider>
  )
}

export function useCache() {
  const { cache } = useContext(Context)
  return cache
}

export function useSetCache() {
  const { setCache } = useContext(Context)
  return setCache
}