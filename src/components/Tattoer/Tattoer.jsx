import "./Tattoer.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import foto from "../../assets/foto-prueba.jpg";
import UserService from "../../_services/UserService";
import { useSelector } from "react-redux";

export default function Tattoer({ tattoer }) {
  const navigate = useNavigate();
  const user = useSelector((state)=> state.auth.user);

  const getSingleTattoer = (name) => {
    navigate(`/tattoers/${name}`);
  };

  const handleSaveTattoer = async () => {
    await UserService.saveTattoer(user._id, tattoer);
    navigate("/userPanel");
    console.log(user);
  }

  return (
    <div className="card">
      <img src={foto} className="card-img-top" alt="Foto del artista" />
      <div className="card-body">
        <h5 className="card-title">{tattoer.tattoer_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="  list-group-item">{tattoer.city}</li>
        <li className="  list-group-item">{tattoer.style}</li>
      </ul>
      <div className="card-body">
        <button className="button" type="submit" onClick={handleSaveTattoer}>Guardar</button>
        {/* <a href="#" className="card-link">
          Another link
        </a> */}
      </div>
    </div>
  );
}
