import React from 'react';

export function NavBar() {
  return (
    <header className="navigation">
        <p className="nav-brand-name"><a className="text-white" href="index.html">Ikuzo</a></p>
        <form className="m-2 m-lg-0 search-box">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success m-2 m-sm-0" type="submit">Search</button>
        </form>
        <nav className="navbar navbar-expand-lg nav-bg navigation-links">
            <ul className="nav nav-pills navbar-fixed-top">
                <li className="nav-item ml-2" role="presentation"><a className="nav-link text-white" href="#">Add Event</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link text-white" href="aboutUs.html">About</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link text-white" href="profile.html">Profile</a></li>
            </ul>
        </nav>
        <div className="hamburger-menu">
            <span className="material-icons" aria-label="hamburger menu icon">menu</span>
        </div>
    </header>
  );
}