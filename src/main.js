import { API_KEY } from "./dev.js";

async function getTrendingMoviesPreview() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY
  );
  const data = await res.json();

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
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY
  );
  const data = await res.json();


  const genres= data.genres;

  console.log(genres);

  genres.forEach((genre) => {
    const categories = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const titulo = document.createElement("h3");
    titulo.textContent = genre.name;
    titulo.classList.add("category-title");

    categoryContainer.appendChild(titulo);
    categories.appendChild(categoryContainer);
  });
}
getCategoriesPreview();

getTrendingMoviesPreview();
