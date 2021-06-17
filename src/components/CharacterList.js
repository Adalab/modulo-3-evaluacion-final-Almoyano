import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  let characterElements = "";

  if (props.characters.length !== 0) {
    characterElements = props.characters.map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      );
    });
  } else {
    characterElements = "No se encuentra el personaje";
  }

  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
