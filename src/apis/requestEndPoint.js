// const apiKey = "4df7613085e7286255938fd2413928f0";
let apiKey;
if (process.env.NODE_ENV !== "production") {
  apiKey = process.env.REACT_APP_API_KEY;
} else {
  apiKey = process.env.API_KEY;
}
const requests = {
  fetchTrending: `/trending/all/day?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginl: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentraies: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default requests;
