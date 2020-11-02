import React, { useState, FormEvent, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

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

  return (<form onSubmit={handleSubmit}>
    <input type="text" value={input} onChange={({ target }) => setInput(target.value)} />
    <button>Search</button>
  </form>)
}