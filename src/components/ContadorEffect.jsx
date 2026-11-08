import React, { useState, useEffect } from "react";

const ContadorEffect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador ahora es: ${contador}`);
  }, [contador]);

  return (
    <div>
      <p>has hecho click {contador} veces</p>
      <button onClick={() => setContador(contador + 2)}>Incrementar</button>
    </div>
  );
};

export default ContadorEffect;
