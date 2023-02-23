import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLoginFormValues } from "../../_helpers/form-utilities";
import AuthService from "../../_services/AuthService";
import TokenStorageService from "../../_services/TokenStorageService";
import "./Register.scss";

export default function Register() {
  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };

  //hooks
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // useEffect(() => {
  //   const credentials = {
  //     email: formValues.email,
  //     password: formValues.password,
  //     name: formValues.name,
  //     lastname: formValues.lastname,
  //   };
//
  //   //verificar que no hay error
  //   if (Object.keys(formErrors).length == 0 && isSubmit) {
  //     console.log("LOGIN...");
  //     register(credentials);
  //   }
  //   console.log("useEffect", formErrors);
  // }, [formErrors]);

  const register = async (credentials) => {
    try {
      const res = await AuthService.register(credentials);
      console.log(res.data);
      TokenStorageService.saveToken(res.data.token);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //handlers
  const handleChange = (e) => {
    e.preventDefault();
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
    register(formValues);
  };

  return (
    <div>
      <div className="container pt-5 col-lg m-auto">
        <h2>Registro</h2>

        <form className="text-start" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formValues.name}
              onChange={handleChange}
            />
            <label className="form-label">Apellido</label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              value={formValues.lastname}
              onChange={handleChange}
            />
            <label className="form-label">Email</label>
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
            <label className="form-label">Contraseña</label>
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
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
