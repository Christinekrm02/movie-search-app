const ApiUrl =
  "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=d1ea2c99e867f9930eaa83caa6d21191&page=1";
/*const ApiUrl =
  "https://api.themoviedb.org/3/movie/550?api_key=d1ea2c99e867f9930eaa83caa6d21191";
const imgPath = "https://image.tmdb.org/t/p/w1200";*/
searchUrl =
  "https://api.themoviedb.org/3/movie/search/movie?api_key=d1ea2c99e867f9930eaa83caa6d21191&query=''";

const form = document.getElementById("form");
const search = document.getElementById("search");

//returns movies and associated info about each

getMovies(ApiUrl);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log("fetchMovies: ", data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchMovie = search.value;
  if (searchMovie && searchMovie !== "") {
    getMovies(searchUrl + searchMovie);
    search.value = "";
  } else {
    window.location.reload();
  }
});
