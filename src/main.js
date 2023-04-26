import { API_KEY } from "./dev.js";

async function getTrendingMoviesPreview() {

  const res =await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY
  );
  const data = await res.json();
  
  const movies = data.results;

  console.log(movies);

}
getTrendingMoviesPreview()