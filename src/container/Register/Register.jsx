import "./Register.scss";

export default function Register() {
    return (
        <div>
        <div className="container pt-5 col-lg m-auto">
          <h2>Registro</h2>
  
          <form className="text-start" noValidate>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                className="form-control"
              />
            <label className="form-label">Apellido</label>
              <input
                type="text"
                name="name"
                className="form-control"
              />
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
              />
              <div id="emailHelp" className="form-text form-text-error">
                {/* {formErrors.email} */}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control"
              
              />
              <div id="emailHelp" className="form-text form-text-error">
                
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
    )
}