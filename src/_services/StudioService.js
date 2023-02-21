import axios from "axios";
import { enviroment } from "../_environments.js/environments";

export const StudioService = {};

StudioService.getAllStudios = async () => {
  const apiUrl = await axios.get(`${enviroment.BASE_API_URL}/studios`);

  return apiUrl.data.data;
};

StudioService.getSingleStudio = async (name) => {
  const apiUrl = `${enviroment.BASE_API_URL}/studios/${name}`;
  const res = await axios.get(apiUrl);

  return res;
};