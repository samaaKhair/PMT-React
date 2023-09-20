import React from 'react'
import './alert.css'

const alert = (props) => {
  return (
    <div className='alertBox'>
      <span id={props.id}/>{props.message}<span/>
    </div>
  )
}

export default alert
