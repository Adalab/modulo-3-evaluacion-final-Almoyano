import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <CharacterCard key={character.name} character={character} />;
  });

  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
