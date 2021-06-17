import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <article className="card">
        <img
          className="card__img"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <h2 className="card__title">{props.character.name}</h2>
        <h3 className="card__description">{props.character.specie}</h3>
      </article>
    </Link>
  );
};

export default CharacterCard;
