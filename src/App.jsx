import Controles from "./components/Controles";
import Props from "./components/Props";
import Contador from "./components/Contador";
import { useState } from "react";
import InputTexto from "./components/InputTexto";
import Formulario from "./components/Formulario";
import MensajeCondicional from "./components/MensajeCondicional";
import Sesion from "./components/Sesion";
import MensajeConsola from "./components/MensajeConsola";
import ContadorEffect from "./components/ContadorEffect";
import ConsumoApi from "./components/ConsumoApi";

function App() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <Props nombre="Juan" />
      <hr />
      <Contador contador={contador} />
      <Controles contador={contador} setContador={setContador} />
      <hr />
      <InputTexto />
      <hr />
      <Formulario />
      <hr />
      <MensajeCondicional />
      <hr />
      <Sesion />
      <hr />
      <MensajeConsola />
      <hr />
      <ContadorEffect />
      <hr />
      <ConsumoApi />
    </>
  );
}

export default App;
