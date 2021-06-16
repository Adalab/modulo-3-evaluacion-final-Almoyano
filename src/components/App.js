import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <>
      <h1 className="title">Listado de personajes</h1>
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
