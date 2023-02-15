import "./Home.scss";
import React from "react";
import background from "../../assets/fondo-torso.jpg";

export function Home() {
    return (
        <div className="home">
        <img className="torso" src={background} alt="tatoo-torso" />
        <h1>hola</h1>
      </div>
    )
}