import data from 'db/data.json';

const actorsMapper = (actors) => {
  return actors.map((item) => {
    return { name: item };
  });
};

const genresMapper = (genres) => {
  return genres.map((item) => {
    return { title: item };
  });
};

const parsedData = data.map((movieData) => {
  return {
    ...movieData,
    actors: actorsMapper(movieData?.actors),
    genres: genresMapper(movieData?.genres),
  };
});

const resolvers = {
  Query: {
    getMovie: (_, { title }) => {
      const output = parsedData.filter((item) => item.title === title);
      return output[0];
    },
    getMoviesByGenre: (_, { title }) => {
      return parsedData.filter((item) =>
        item?.genres?.some((genreItem) => genreItem.title === title)
      );
    },
  },
};

export default resolvers;
