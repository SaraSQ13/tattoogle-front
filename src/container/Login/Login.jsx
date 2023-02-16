import "./Login.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    //hooks
    const navigate = useNavigate();
    navigate("/login");

    return (
        <div>
        <div className="container pt-5 col-lg m-auto">
          <h2>Login</h2>
          <form className="text-start" noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formValues.email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text form-text-error">
                {formErrors.email}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formValues.password}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text form-text-error">
                {formErrors.password}
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>  
    );
}