import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import PokemonDetailedView from "../pages/PokemonDetailedView/PokemonDetailedView";
import { ToastContainer } from "react-toastify";

const routes = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/pokemon/:id" element={<PokemonDetailedView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
