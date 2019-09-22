import React, { useState } from 'react';
import BrowserBar from '../components/BrowserBar/BrowserBar.jsx'
import BrowserContent from '../components/BrowserContent/BrowserContent.jsx'

export default function Index() {
  const [searchContent, setSearchContent] = useState('');
  
  return (
    <div className="App">
      <BrowserBar searchAction={setSearchContent} />
      <BrowserContent searchContent={searchContent} />
    </div>
  )
}
