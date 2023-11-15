import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Products from "./pages/Products";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="container">
      <Header />
      <SubHeader />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
