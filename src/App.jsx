import { useState } from "react";
import "./App.css";
// Components
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Footer />
    </>
  );
}

export default App;
