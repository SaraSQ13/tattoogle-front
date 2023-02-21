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
      {/* <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>

      <select
        className="form-select form-select-sm"
        aria-label=".form-select-sm example"
      >
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select> */}
      <h1>ARTISTAS</h1>
      <div className= "tattoer-list">
      {tattoers.length > 0 &&
        tattoers.map((tat)=> <Tattoer key={tat._id} tattoer={tat}/>)}
      </div>
    </div>
  );
}
