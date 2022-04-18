import React from 'react'
import './Button.css'

const Button = ({color = 'primary', name = '', size = 'medium', type = 'normal', icon = '', style = {}}) => {
  return (
    <button className={`button ${color} ${size} ${type}`} style={style}>{name} {icon ? <i className={`icon ${icon}`}/> : ''}</button>
  )
}

export default Button