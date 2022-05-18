import React from 'react'
import './Button.css'

interface ButtonProps {
  name?: string
  color?: string
  size?: string
  type?: string
  icon?: string
  style?: {}
  onClick?: () => void
}

const Button:  React.FC<ButtonProps> = (
  {
    color = "primary",
    name = "Button",
    size = "medium",
    type = "normal",
    icon = "",
    style = {},
    onClick
  }) => {
  return (
    <button className={`button ${color} ${size} ${type}`} style={style} type="button" onClick={onClick}>{icon !== "" ? <i className={`icon ${icon}`} /> : name}</button>
  )
}

export default Button

