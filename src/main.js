import { API_KEY } from "./dev.js";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: "es-ES",
  },
});

async function getTrendingMoviesPreview() {
  const { status, data } = await api("trending/movie/week");
  const movies = data.results;
  console.log(movies);

  movies.forEach((movie) => {
    const trendingPreviewMovies = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    movieContainer.appendChild(movieImg);
    trendingPreviewMovies.appendChild(movieContainer);
  });
}

async function getCategoriesPreview() {
  const { status, data } = await api("genre/movie/list");

  const genres = data.genres;

  console.log(genres);

  genres.forEach((genre) => {
    const categories = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const titulo = document.createElement("h3");
    titulo.textContent = genre.name;
    titulo.setAttribute("id", "id" + genre.id);
    titulo.classList.add("category-title");

    categoryContainer.appendChild(titulo);
    categories.appendChild(categoryContainer);
  });
}
getCategoriesPreview();

getTrendingMoviesPreview();
