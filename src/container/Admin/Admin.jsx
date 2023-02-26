import "./Admin.scss";
import React, { useEffect, useState } from "react";
import TokenStorageService from "../../_services/TokenStorageService";
import UserService from "../../_services/UserService";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  //hooks
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const token = TokenStorageService.getToken();

  useEffect(() => {
    if (!sessionStorage.getItem("auth-token")) {
      navigate("/login");
    } else {
      getAllUsers(token);
    }
  }, []);

  const getAllUsers = async (token) => {
    try {
      const res = await UserService.getAllUsers(token);
      setUsers(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await UserService.deleteUser(id, token);
      const updatedUsers = users.filter((user) => user._id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <div className="container-admin">
      <h1>Admin</h1>
      {users.map((user) => (
        <div className="card-admin">
        <div className="card" key={user._id}>
          <div className="card-body">
            <h5 className="card-title">Usuario: {user.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="  list-group-item">Email: {user.email}</li>
            <li className="  list-group-item">Rol: {user.role}</li>
          </ul>
          <button onClick={() => handleDeleteUser(user._id)}>Eliminar</button>
        </div>
        </div>
      ))}
    </div>
  );
}
