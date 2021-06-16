import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import CharacterList from "./CharacterList";
import ls from "../services/local-storage";

const App = () => {
  const charactersLocalStorageData = ls.get("characters", []);
  console.log(charactersLocalStorageData);
  const [characters, setCharacters] = useState(charactersLocalStorageData);

  useEffect(() => {
    console.log(characters.length);
    if (characters.length === 0)
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
  }, []);

  useEffect(() => {
    console.log("Guardando en local storage", characters);
    ls.set("characters", characters);
  }, [characters]);

  return (
    <>
      <h1 className="title">Listado de personajes</h1>
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
