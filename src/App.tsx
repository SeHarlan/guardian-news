import React, { useEffect, useState } from 'react';
import './App.css';
import ContentList from './components/ContentList';
import { fetchContentList } from './utils/services';
import { contentInterface } from './utils/interfaces';

const initState: contentInterface[] = []

function App() {
  const [contentList, setContentList] = useState(initState)

  useEffect(() => {
    fetchContentList()
      .then(list => setContentList(list))
  }, [])
  return (
    <>
      <ContentList contentList={contentList} />

    </>
  );
}

export default App;
