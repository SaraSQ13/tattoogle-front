import "./Home.scss";
import React from "react";
import background from "../../assets/fondo-torso.jpg";

export function Home() {
    return (
        <div className="home">
        <img className="torso" src={background} alt="tatoo-torso" />
        <h1>¡Encuentra al artista perfecto!</h1>
        <h3>Elige cómo buscarlx:</h3>
        
        
      </div>
    )
}