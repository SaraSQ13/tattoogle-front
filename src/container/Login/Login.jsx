import "./Login.scss";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../_services/AuthService";
import TokenStorageService from "../../_services/TokenStorageService";
import { validateLoginFormValues } from "../../_helpers/form-utilities";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";

export default function Login() {
  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const credentials = {
      email: formValues.email,
      password: formValues.password,
    };

    //verificar que no hay error
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log("LOGIN...");
      handleLogin(credentials);
    }
  }, [isSubmit, formErrors]);

  const handleLogin = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      console.log(res.data);
      TokenStorageService.saveToken(res.data.token);
      sessionStorage.setItem("userId", res.data.id);
      console.log(res.data.user);
      dispatch(login(res.data.user));
      

      if (res.data.user.role == "super_admin") {
        navigate("/admin");
      } else if (res.data.user.role == "user") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //handlers 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateLoginFormValues(formValues));
    setIsSubmit(true);
  };

  return (
    <div className="container">
        <h2>LOGIN</h2>
      <div className="container pt-5 col-lg-3">
        <form className="text-start" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formValues.email} onChange={handleChange}/>
            <div id="emailHelp" className="form-text form-text-error"></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" name="password" className="form-control" value={formValues.password} onChange={handleChange} />
            <div id="emailHelp" className="form-text form-text-error">{formErrors.password}</div>
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
