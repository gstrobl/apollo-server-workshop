const typeDefs = `
  type Genres {
    title: String
  }

  type Actors {
    name: String
  }

  type Movie {
    id: String
    title: String
    releaseDate: String
    imdbRating: Float
    genres: [Genres]
    actors: [Actors]
    storyline: String
  }

  type Query {
    getMovie(title: String!): Movie
    getMoviesByGenre(title: String!): [Movie]
  }
`;

export default typeDefs;
