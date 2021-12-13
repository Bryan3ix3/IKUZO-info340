import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export function NavBar() {
  const customToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div ref={ref} onClick={e => {e.preventDefault(); onClick(e);}}>
      {<span className="material-icons" style={{color: "white"}} aria-label="hamburger menu icon">menu</span>}
      {children}
    </div>
  ));

  return (
    <header className="navigation">
        <p className="nav-brand-name"><Link to="/" className="text-white">Ikuzo</Link></p>
        <nav className="navbar navbar-expand-lg nav-bg navigation-links">
            <ul className="nav nav-pills navbar-fixed-top">
                <li className="nav-item ml-2" role="presentation"><NavLink to="/addEvent" className="nav-link text-white">Add Event</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/about"className="nav-link text-white">About</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/profile" className="nav-link text-white">Profile</NavLink></li>
            </ul>
        </nav>
        <div className="hamburger-menu">
          <Dropdown>
            <Dropdown.Toggle as={customToggle} style={{backgroundColor: "black", border: "none"}} />
            <Dropdown.Menu>
              <Dropdown.Item className="dropdown-nav">
                <NavLink to="/addEvent" className="dropdown-item">Add Event</NavLink>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-nav">
                <NavLink to="/about" className="dropdown-item">About</NavLink>
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-nav">
                <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </header>
  );
}