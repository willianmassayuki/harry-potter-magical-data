import { useEffect, useState } from "react";
import api from "./services/api";
import "./App.scss";

function App() {
  useEffect(() => {
    api
      .get("characters")
      .then((response) => {
        //setDados(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Harry Potter</h1>
      </div>
    </>
  );
}

export default App;
