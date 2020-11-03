import React, { createContext, useContext, useState, ReactChild, SetStateAction, Dispatch } from 'react'
import { contentInterface } from './interfaces'
import image from '../assets/default.png'

interface Cache {
  [key: string]: contentInterface | contentInterface[]
}
interface Children {
  children: ReactChild
}

type reducerStateType = {
  setCache: Dispatch<SetStateAction<Cache>>
  cache: Cache
}

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
  array: [initState]
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