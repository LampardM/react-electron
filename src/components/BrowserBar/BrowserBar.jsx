import React, { useState } from 'react';
import './BrowserBar.scss'

const BrowserBar = (props) => {
  const [values, setValues] = useState({
    name: ''
  });

  const preStack = () => {
    console.log('pre');
  }
  const nextStack = () => {
    console.log('next');
  }
  const refreshUrl = () => {
    console.log('refresh');
  }

  return (
    <div className="bar-container">
      <div className="bar-left">
        <span className="iconfont icon-tuya_huabanfuben-copy" onClick={preStack}></span>
        <span className="iconfont icon-tuya_huabanfuben" onClick={nextStack}></span>
        <span className="iconfont icon-shuaxin" onClick={refreshUrl}></span>
      </div>
      <div className="bar-center">
      </div>
      <div className="bar-right">
        Go
      </div>
    </div>
  )
}

export default BrowserBar;