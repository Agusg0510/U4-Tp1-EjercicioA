import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const Sesion = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <Logout /> : <Login />}
      <button onClick={() => setLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Cerrar Sesion" : "Iniciar Sesion"}
      </button>
    </div>
  );
};

export default Sesion;
