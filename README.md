# Basic Apollo Server Setup

## Local Development

Use the package manager [yarn](https://yarnpkg.com/) to install the packages.

```bash
yarn dev
```

Open `http://localhost:4000/graphql` and try this query:


```gql
query getMovies {
  getMoviesByGenre(title: "Adventure") {
    id
    title
    genres {
      title
    }
  }
}
```

if everything works like expected you should see some results 🍿.

## Next steps

This setup will be extended with a lightweight DB layer to show some examples with mutations.

## License
[MIT](https://choosealicense.com/licenses/mit/)