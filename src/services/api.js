const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          image: character.image,
          name: character.name,
          id: character.id,
          status: character.status,
          specie: character.species,
          origin: character.origin.name,
          episode: character.episode.length,
          type: character.type,
        };
      });
      return cleanData;
    });
};

export default getApiData;
