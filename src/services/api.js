const getApiData = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json?results=20"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          image: character.image,
          name: character.name,
          specie: character.species,
          id: character.id,
        };
      });
      return cleanData;
    });
};

export default getApiData;
