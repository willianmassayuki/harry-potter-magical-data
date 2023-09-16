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

  const audioElem = document.getElementById("audioTheme");
  function playAudio() {
    audioElem.play();
  }

  return (
    <>
      <div className="app" onMouseMove={playAudio}>
        <audio
          id="audioTheme"
          src="src/assets/media/hedwigs-theme.mp3"
          preload="auto"
        ></audio>
        <h1>The Wizard World</h1>
        <input type="text"></input>
        {/* <ul>
          {dados?.map((item) => (
            <>
              <li className="card-text">
                Character: {item.name} Actor(Actress)): {item.actor}
              </li>
            </>
          ))}
        </ul> */}
      </div>
    </>
  );
}

export default App;
