import "./Studio.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import foto from "../../assets/foto-prueba.jpg";

export default function Studio({ studio }) {
  const navigate = useNavigate();

  const getSingleStudio = (name) => {
    navigate(`/studios/${name}`);
  };

  return (
    <div className="card" >
      <img src={foto} className="card-img-top" alt="Foto del artista" />
      <div className="card-body">
        <h5 className="card-title">{studio.studio_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{studio.city}</li>
        <li className="list-group-item">{studio.style}</li>
        <li className="list-group-item">A third item</li>
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