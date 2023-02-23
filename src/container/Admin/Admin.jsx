import "./Admin.scss";
import React, { useEffect, useState } from "react";
import TokenStorageService from "../../_services/TokenStorageService";
import UserService from "../../_services/UserService";

export default function Admin() {
  //hooks
  const [users, setUsers] = useState([]);
  const token = TokenStorageService.getToken();

  useEffect(() => {
    getAllUsers(token);
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

  return (
    <div className="container">
      <h1>Admin</h1>
      {users.map((user)=> (
      <div className="card" key={user._id}>
        <div className="card-body">
          <h5 className="card-title">Usuario: {user.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="  list-group-item">Email: {user.email}</li>
          <li className="  list-group-item">Rol: {user.role}</li>
        </ul>
      </div>
      ))}
    </div>
  );
}
