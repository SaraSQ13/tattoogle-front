import "./Home.scss";
import React from "react";
import background from "../../assets/fondo-torso.jpg";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <img className="torso" src={background} alt="tatoo-torso" />
      <div className="panel-home">
      <h1>¡Encuentra al artista perfecto!</h1>
      <h3>¡Busca a la mejor persona para tener el diseño de tatuaje ideal para ti! </h3>
      <h4>Elige cómo buscarlx:</h4>
      <ul>
        <li>
          <a>
          <NavLink className="nav-button" to="/tattoers">
          ARTISTAS
        </NavLink>
        </a>
        </li>
        <li>
          <a>
          <NavLink className="nav-button" to="/studios">
          ESTUDIOS 
        </NavLink>
        </a>
        </li>
      </ul>
      </div>
    </div>
  );
}
