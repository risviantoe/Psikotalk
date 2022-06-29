import React from 'react'

interface IconProps {
    type: string
    color?: string
    size?: number
}

const Icon: React.FC<IconProps> = ({ type, color, size }) => {
  return (
    <i className={`icon ${type}`} style={{ width: size, background: color }} />
  )
}

export default Icon