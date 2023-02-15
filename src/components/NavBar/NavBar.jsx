import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          TATTOOGLE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/tattoers"
              >
                Tatuadores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/studios">
                Estudios de tatuaje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/login"
                tabIndex="-1"
                aria-disabled="true"
              >
                Inicio de sesión
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    </div>
  );
}
