const ApiUrl =
  "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=d1ea2c99e867f9930eaa83caa6d21191&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1200";
searchUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=d1ea2c99e867f9930eaa83caa6d21191&query=''";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("id");

//returns movies and associated info about each
getMovies(ApiUrl);
async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();
  renderMovies(data.results);
  // console.log("getMovies: ", data.results);
}

function renderMovies(movies) {
  main.innerHTML = "";
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
      <img src="${imgPath + poster_path}" alt="${title}" />

     <div class="movie-info">
       <h3>${title}</h3>
       <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
     ${overview}
    </div>
 `;
    main.appendChild(movieElement);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const searchMovie = search.value;
  if (searchMovie && searchMovie !== "") {
    getMovies(searchUrl + searchMovie);
    searchMovie.value = "";
  } else {
    window.location.reload();
  }
});
