import React, { useState, useEffect, useRef } from 'react'
import BrowserBar from '../components/BrowserBar/BrowserBar.jsx'
import BrowserContent from '../components/BrowserContent/BrowserContent.jsx'

export default function Index() {
  const [searchContent, setSearchContent] = useState('')
  const BrowserContentRef = useRef()

  const searchChange = (value) => {
    setSearchContent(value)
    // * React 为了提升性能，如果值不改变则不会进入useEffect，而需求需要每次都触发load事件
    BrowserContentRef.current.browserLoad()
  }

  useEffect(() => {
    BrowserContentRef.current.browserLoad()
  })
  
  return (
    <div className="App">
      <BrowserBar searchAction={searchChange} />
      <BrowserContent searchContent={searchContent} ref={BrowserContentRef} />
    </div>
  )
}
