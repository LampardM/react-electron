import React, { useState, useEffect } from 'react';
import './BrowserContent.scss'

const BrowserContent = (props) => {
  const searchChangeHandler = () => {}

  useEffect(() => {
    searchChangeHandler(props.searchContent)
  })

  return (
    <div>{props.searchContent}</div>
  )
}

export default BrowserContent;
