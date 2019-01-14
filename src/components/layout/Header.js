import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
        <h1>Todolist</h1>
        <Link style={linkStyle} to="/">Home</Link> | 
        <Link style={linkStyle} to="/About"> About</Link>
    </header>
  )
}

const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px'
}
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
}


export default Header; 