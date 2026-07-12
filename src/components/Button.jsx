import React from 'react';
import './button.css';

const Button = ({icon, name, bgcolor = '#ff3700', color = '#ffffff', onClick = undefined}) => {
  return (
    <button type="button" className="mainBtn" style={{ color: color, background: bgcolor }} onClick={onClick}>
      {icon}  {name}
    </button>
  )
}

export default Button;