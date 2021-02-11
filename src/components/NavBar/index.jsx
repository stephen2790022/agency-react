import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemContext } from 'ThemContext'


const NavBar = () => {
  const { them, setThem } = useContext(ThemContext);

  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("light", "dark")
      localStorage.themChoice = them
      const toggle = document.querySelector('.toggle')
      toggle.classList.add("active")
      toggle.classList.add("animate")
      setTimeout(() => {
        toggle.classList.add('active');
      }, 150);
      setTimeout(() => toggle.classList.remove('animate'), 300);
      document.body.classList.add(localStorage.themChoice)
    } else {
      document.body.classList.remove("light", "dark")
      localStorage.themChoice = them
      const toggle = document.querySelector('.toggle')
      toggle.classList.remove("active")
      toggle.classList.add("animate")
      setTimeout(() => {
        toggle.classList.remove('active');
      }, 150);
      setTimeout(() => toggle.classList.remove('animate'), 300);
      document.body.classList.add(localStorage.themChoice)
    }
  })
  return (
    <nav className="navBar">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/works'>Works</Link></li>
        <li>
          {them === "light" && <span className="toggle " onClick={() => them === "light" ? setThem("dark") : setThem("light")}></span>}
          {them === "dark" && <span className="toggle" onClick={() => them === "light" ? setThem("dark") : setThem("light")}></span>}
        </li>
      </ul>
    </nav>


  );
};

export default NavBar;