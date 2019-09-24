import React, { useState, useEffect, useRef } from 'react'
import './BrowserBar.scss'

export default function BrowserBar(props) {
  const [isFocused, setIsFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    console.log(isFocused);
  })
  
  const preStack = () => {
    console.log('pre');
  }
  const nextStack = () => {
    console.log('next');
  }
  const refreshUrl = () => {
    console.log('refresh');
  }
  const searchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const searchDownEnter = (event) => {
    if(event.keyCode === 13) {
      props.searchAction(searchValue)
      setIsFocused(false)
      inputRef.current.blur()
    }
  }

  return (
    <div className="bar-container">
      <div className="bar-left">
        <span className="iconfont icon-tuya_huabanfuben-copy" onClick={preStack}></span>
        <span className="iconfont icon-tuya_huabanfuben" onClick={nextStack}></span>
        <span className="iconfont icon-shuaxin" onClick={refreshUrl}></span>
      </div>
      <div className="bar-center">
        <input 
          type="text"
          value={searchValue} 
          ref={inputRef}
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)} 
          onChange={searchChange}
          onKeyDown={searchDownEnter} />
      </div>
      <div className="bar-right">
        Go
      </div>
    </div>
  )
}
