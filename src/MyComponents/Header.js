import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
  let headerstyle ={
    padding: "18px",
    backgroundColor: "#E6E6FA",
    color: "Blue",
  }

  let titlestyle = {
    fontSize: "25px",
  }
    return (
        <nav className="navbar navbar-expand-lg nav-light" style={headerstyle}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={titlestyle} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      {props.searchBar ? 
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
    </div>
  </div>
</nav>
    )
}

Header.defaultProps = {
  title: "Your title here",
  searchBar: true 
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}