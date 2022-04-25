import React from 'react'
import './Button.css'

const Button = ({color = 'primary', name = '', size = 'medium', type = 'normal', icon = '', style = {}}) => {
  return (
    <button className={`button ${color} ${size} ${type}`} style={style} type="button">{icon !== '' ? <i className={`icon ${icon}`} /> : name}</button>
  )
}

export default Button

