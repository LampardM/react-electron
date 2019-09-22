import React, { useState } from 'react';
import './BrowserBar.scss'

const BrowserBar = (props) => {
  const [search, setValues] = useState('');
  const [isFocused, setIsFocused] = useState(false)
  
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
    setValues(e.target.value)
  }
  const searchDownEnter = (event) => {
    if(event.keyCode === 13) {
      console.log('enter');
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
          type="text"value={search} 
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

export default BrowserBar;