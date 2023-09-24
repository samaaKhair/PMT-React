import React from 'react'
import './Alert.css'

const Alert = (props) => {
  return (
    <div className='alertBox'>
      <span/>{props.message}<span/>
    </div>
  )
}

export default Alert
