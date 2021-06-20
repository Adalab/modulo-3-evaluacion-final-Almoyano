import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filter from "./Filter";
import TypeFilter from "./TypeFilter";

import getApiData from "../services/api";
import ls from "../services/local-storage";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterType, setFilterType] = useState(ls.get("filterType", ""));

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
    } else if (data.key === "type") {
      setFilterType(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.type.toLowerCase().includes(filterType.toLowerCase());
    });

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(routeCharacterId);
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p>No hay ningún personaje que coincida con la palabra buscada</p>;
    }
  };

  return (
    <>
      <h1 className="title">Listado de personajes</h1>
      <Switch>
        <Route exact path="/">
          <Filter filterName={filterName} handleFilter={handleFilter} />
          <TypeFilter filterType={filterType} handleFilter={handleFilter} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
