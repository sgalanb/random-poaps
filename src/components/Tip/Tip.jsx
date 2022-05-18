import React from 'react'
import './Tip.css'

import { ReactComponent as InfoSVG } from 'images/info-solid.svg'

export default function Tip({text}) {
  return (
    <div className='tip-container'><InfoSVG className='tip-icon' width={'30px'} /><p className='tip-text'>{text}</p></div>
  )
}
