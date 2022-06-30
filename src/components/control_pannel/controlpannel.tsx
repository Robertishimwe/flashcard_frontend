import React from "react";
import Cards from "./cards";
import AddCard from "./addCard";
import SortCard from "./sortCard";
import "../login_signup/loginSignup.css";

function Controlpannel() {
  return (
    <div>
      <AddCard />
      <SortCard />
      <Cards />
    </div>
  );
}

export default Controlpannel;
