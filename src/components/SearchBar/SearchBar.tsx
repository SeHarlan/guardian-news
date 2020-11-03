import React, { useState, FormEvent, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import styles from './searchBar.module.css'
interface searchBarProps {
  setSearch: Function,
  setOrderBy: Function,
  orderBy: string
}

export default function SearchBar({ setSearch, setOrderBy, orderBy }: searchBarProps) {
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
        placeholder="search term(s)"
        value={input}
        onChange={({ target }) => setInput(target.value)} />

      <div>
        <label className={styles.label} htmlFor="orderBy">Sort By: </label>
        <select
          className={styles.select}
          name="orderBy"
          id="orderBy"
          value={orderBy}
          onChange={({ target }) => setOrderBy(target.value)}>
          <option selected value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <button className={styles.button}>Search</button>
    </div>
  </form>)
}