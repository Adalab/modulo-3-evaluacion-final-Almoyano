import React, { useState, useEffect } from "react";
import getApiData from "../services/api";

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
    </>
  );
};

export default App;
