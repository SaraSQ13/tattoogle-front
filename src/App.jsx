import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./container/Home/Home";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import TattoersList from "./container/TattoersList/TattoersList";
import StudiosList from "./container/StudiosList/StudiosList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tattoers" element={<TattoersList />} />
          <Route path="/studios" element={<StudiosList/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
