import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTattoers } from "../../features/auth/authSlice";
import UserService from "../../_services/UserService";
import "./userPanel.scss";

export default function UserPanel() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tattoersUser = useSelector((state) => state.auth.tattoers);

  useEffect(() => {
    if (isLoggedIn) {
      try {
        UserService.getTattoersFromUser(user).then((res) => {
          console.log(res.data.tattoers);
          dispatch(updateTattoers([...res.data.tattoers]));
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Necesitas iniciar sesión");
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h2> Hola, {user.name}</h2>
      <h2>Estos son tus artistas guardados: </h2>
      {tattoersUser.map((tattoer) => (
        <div className="tattoer-save" key={tattoer._id}>
          {tattoer.tattoer_name}
          <img src={foto} className="card-img-top" alt="Foto del artista" />
        </div>
      ))}
    </div>
  );
}
