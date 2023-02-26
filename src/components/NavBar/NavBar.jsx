import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import TokenStorageService from "../../_services/TokenStorageService";
import "./NavBar.scss";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  const user = useSelector((state)=> state.auth.user);

  const handleLogout = () => {
    TokenStorageService.logOut();
    dispatch(logout());
    navigate("/");
  }
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
                className="nav-link "
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
                className="nav-link"
                to="/login"
                tabIndex="-1"
                aria-disabled="true"
                >
                Inicio de sesión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/admin"
                tabIndex="-1"
                aria-disabled="true"
                >
                Panel de Admin
              </NavLink>
            </li>
          </ul>
                <nav className="navbar">
                  {isLoggedIn ? (
                    <>
                    <p>Welcome, {user.name}</p>
                    <button>
                      <NavLink to="/" onClick={handleLogout} className="nav-link">
                        Cerrar sesión
                      </NavLink>
                    </button>
                    </>
                  ) : (
                    ""
                  )}
                </nav>
         
        </div>
      </div>
    </nav>

    </div>
  );
}
