import React, { useState, FormEvent } from 'react'

interface searchBarProps {
  search: string,
  setSearch: Function
}

export default function SearchBar({ search, setSearch }: searchBarProps) {
  const [input, setInput] = useState(search)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSearch(input)
  }

  return (<form onSubmit={handleSubmit}>
    <input type="text" value={input} onChange={({ target }) => setInput(target.value)} />
    <button>Search</button>
  </form>)
}