import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
