import React, {useState} from 'react'
import './Navbar.css'
import { slide as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'

function Navbar() {
    const [activeClass,setActiveClass] = useState('home')
    
    return (
      <Menu>
        <Link to='/' className={activeClass === 'home' ? "menu-item active-item" : "menu-item"} onClick={()=>setActiveClass('home')}>Home</Link>
        <Link to='/about' className={activeClass === 'about' ? "menu-item active-item" : "menu-item"} onClick={()=>setActiveClass('about')}>About</Link>
        <Link to="/projects" className={activeClass === 'projects' ? "menu-item active-item" : "menu-item"} onClick={()=>setActiveClass('projects')}>Projects</Link>
        <Link to="/skills" className={activeClass === 'skills' ? "menu-item active-item" : "menu-item"} onClick={()=>setActiveClass('skills')}>Skills</Link>
        <Link to="/contact" className={activeClass === 'contact' ? "menu-item active-item" : "menu-item"} onClick={()=>setActiveClass('contact')}>Contact</Link>  
        <a href="https://docs.google.com/document/d/1Z5zvlvJ94czo3L9ESmjaaynMM5pktIZT1NTWfme1Ig0/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className={activeClass === 'resume' ? "menu-item active-item" : "menu-item"} onClick={()=>setActiveClass('resume')}>
            Resume</a>     
      </Menu>
    )
}

export default Navbar
