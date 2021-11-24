import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <header className="navigation">
        <p className="nav-brand-name"><Link exact to="/" className="text-white">Ikuzo</Link></p>
        {/* <form className=""m-2 m-lg-0 search-box">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success m-2 m-sm-0" type="submit">Search</button>
        </form> */}
        <nav className="navbar navbar-expand-lg nav-bg navigation-links">
            <ul className="nav nav-pills navbar-fixed-top">
                <li className="nav-item ml-2" role="presentation"><NavLink to="/addEvent" className="nav-link text-white">Add Event</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/about"className="nav-link text-white">About</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/profile" className="nav-link text-white">Profile</NavLink></li>
            </ul>
        </nav>
        <div className="hamburger-menu">
            <span className="material-icons" aria-label="hamburger menu icon">menu</span>
        </div>
    </header>
  );
}