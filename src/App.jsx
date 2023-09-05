import { useEffect, useState } from "react";
import api from "./services/api";
import "./App.scss";

function App() {
  const [dados, setDados] = useState();
  useEffect(() => {
    api
      .get("characters")
      .then((response) => {
        setDados(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Harry Potter</h1>
        <ul>
          {dados?.map((item) => (
            <>
              <li>
                Character: {item.name} Actor(Actress)): {item.actor}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
