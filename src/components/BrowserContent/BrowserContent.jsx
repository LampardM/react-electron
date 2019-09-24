import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import './BrowserContent.scss'

function BrowserContent(props, ref) {
  const contentRef = useRef();

  useImperativeHandle(ref, () => ({
    browserLoad: () => {
      if(props.searchContent) {
        console.log('load', props.searchContent);
      }
    }
  }));

  return (
    <div ref={contentRef}>{props.searchContent}</div>
  )
}
const BrowserContentRef = forwardRef(BrowserContent);
export default BrowserContentRef;
