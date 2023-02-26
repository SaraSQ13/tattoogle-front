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

UserService.getTattoersFromUser = async (tattoer) => {
  const apiUrl = `${enviroment.BASE_API_URL}/users/${tattoer._id}`;
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

UserService.saveTattoer = async (user, tattoer) => {
  try {
    const apiUrl = `${enviroment.BASE_API_URL}/users/${user._id}/save`;
    const res = await axios.patch(apiUrl, tattoer);

    return res.data;
  } catch (error) {
    console.log(error);
    
  }
}

export default UserService;
