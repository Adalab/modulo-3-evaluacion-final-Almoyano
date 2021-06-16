import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import getApiData from "../services/api";
import ls from "../services/local-storage";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));

  useEffect(() => {
    if (characters.length === 0)
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("filterName", filterName);
  }, [filterName]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName);
  });

  return (
    <>
      <h1 className="title">Listado de personajes</h1>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <CharacterList characters={filteredCharacters} />
    </>
  );
};

export default App;
