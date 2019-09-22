import React, { useState, useEffect } from 'react';
import './BrowserContent.scss'

const BrowserContent = (props) => {

  useEffect(() => {
    console.log(props.searchContent, 'searchContent');
  })

  return (
    <div></div>
  )
}

export default BrowserContent;
