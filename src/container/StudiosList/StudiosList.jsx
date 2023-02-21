import "./StudiosList.scss";
import React, { useEffect, useState } from "react";
import Studio from "../../components/Studio/Studio";
import { StudioService } from "../../_services/StudioService";

export default function StudiosList() {
  //hooks
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    getAllStudios();
  }, []);

  //function
  const getAllStudios = async () => {
    try {
      const res = await StudioService.getAllStudios();
      setStudios(res);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  return (
    <div className= "container">
      <h1>ESTUDIOS DE TATUAJE</h1>
      <div className="tattoer-list">
        {studios.length > 0 &&
          studios.map((stu) => <Studio key={stu._id} studio={stu} />)}
      </div>
    </div>
  );
}
