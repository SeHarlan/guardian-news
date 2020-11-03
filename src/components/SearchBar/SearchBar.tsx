import React, { useState, FormEvent, useEffect, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import styles from './searchBar.module.css'
interface searchBarProps {
  setSearch: Function
}

export default function SearchBar({ setSearch }: searchBarProps) {
  const [input, setInput] = useState('')
  const { urlSearch }: { urlSearch: string } = useParams()

  const history = useHistory()

  useEffect(() => {
    if (urlSearch) {
      setSearch(urlSearch)
      setInput(urlSearch)
    }
  }, [urlSearch, setSearch])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSearch(input)
    history.replace(`/${input}`)

  }

  return (<form className={styles.search} onSubmit={handleSubmit}>
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)} />
      <button className={styles.button}>Search</button>
    </div>
  </form>)
}