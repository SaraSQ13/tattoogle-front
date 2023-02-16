import "./Login.scss";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  //hooks
  const navigate = useNavigate();
  // navigate("/login");

  return (
    <div>
      <div className="container pt-5 col-lg-3">
        <h2>Login</h2>
        <form className="text-start" noValidate>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" />
            <div id="emailHelp" className="form-text form-text-error"></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" name="password" className="form-control" />
            <div id="emailHelp" className="form-text form-text-error"></div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="button">
              Enviar
            </button>
          </div>
          <hr />
          <div className="d-grid gap-2">
          <h5>Si es tu primera vez:</h5>
          <button type="submit" className="button">
            <NavLink className="nav-link" to="/register">
              Regístrate
            </NavLink>
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
