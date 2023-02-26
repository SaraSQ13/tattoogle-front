import "./TattoersList.scss";
import React, { useEffect, useState } from "react";
import { TattoerService } from "../../_services/TattoerService";
import Tattoer from "../../components/Tattoer/Tattoer";

export default function TattoersList() {
  //hooks
  const [tattoers, setTattoers] = useState([]);

  useEffect(()=>{
    getAllTattoers();
  },[]);

  //function
  const getAllTattoers = async () => {
    try {
      const res = await TattoerService.getAllTattoers();
      setTattoers(res);
    } catch (error) {
      console.log(error.message || error);
    }
  }

  return (
    <div className="container">
      <h1>ARTISTAS</h1>
      <div className= "tattoer-list">
      {tattoers.length > 0 &&
        tattoers.map((tat)=> <Tattoer key={tat._id} tattoer={tat}/>)}
      </div>
    </div>
  );
}
