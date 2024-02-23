import React from 'react'
import { Link, NavLink } from "react-router-dom"

const NavBar = (props) => {
    const id = 1;
    const title = "Test"
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/events" className="nav-link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Events</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={`/events/${id}/${title}`} className="nav-link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Event Details</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/counter" className="nav-link" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Counter</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default NavBar