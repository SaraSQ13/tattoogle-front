import "./Tattoer.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import foto from "../../assets/foto-prueba.jpg";

export default function Tattoer({ tattoer }) {
  const navigate = useNavigate();

  const getSingleTattoer = (name) => {
    navigate(`/tattoers/${name}`);
  };

  return (
    <div className="card" >
      <img src={foto} className="card-img-top" alt="Foto del artista" />
      <div className="card-body">
        <h5 className="card-title">{tattoer.tattoer_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="  list-group-item">{tattoer.city}</li>
        <li className="  list-group-item">{tattoer.style}</li>
        
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}
