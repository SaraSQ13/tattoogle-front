// Servicio para leer a los usuarios

import axios from "axios";
import { enviroment } from "../_environments.js/environments";

const UserService = {};

UserService.getAllUsers = async (token) => {
  const apiUrl = `${enviroment.BASE_API_URL}` + "/users";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.get(apiUrl, config);
};

UserService.getTattoersFromUser = async (name) => {
  const apiUrl = `${enviroment.BASE_API_URL}/users/${name}`;
  const res = await axios.get(apiUrl); 
  return res.data;
};

UserService.deleteUser = async (user) => {
  try {
    const apiUrl = `${enviroment.BASE_API_URL}/users/delete/${user._id}`;
    const res = await axios.delete(apiUrl);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default UserService;
