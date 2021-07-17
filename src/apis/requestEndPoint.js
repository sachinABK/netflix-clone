// const apiKey = "4df7613085e7286255938fd2413928f0";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchNetflixOriginl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchDocumentraies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default requests;
