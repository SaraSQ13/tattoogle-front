import axios from "axios";
import { enviroment } from "../_environments.js/environments";

export const TattoerService = {};

TattoerService.getAllTattoers = async () => {
  const apiUrl = await axios.get(`${enviroment.BASE_API_URL}/tattoers`);

  return apiUrl.data.data;
};

TattoerService.getSingleTattoer = async (name) => {
  const apiUrl = `${enviroment.BASE_API_URL}/tattoers/${name}`;
  const res = await axios.get(apiUrl);

  return res;
};
