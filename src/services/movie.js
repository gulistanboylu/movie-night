
const axios = require('axios');

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const moviedbKey = 'b4fa962034248325aeb93bb096e247de';

export default {
  getTopratedMovies(page) {
    return axios
      .get('/movie/top_rated', {
        params: {
          api_key: moviedbKey,
          page,
        },
      })
      .then((response) => {
        response.data.results.map((item) => {
          const movie = item;
          movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
          return movie;
        });
        return response.data.results;
      })
      .catch(error => (error));
  },
  getUpcomingMovies(page) {
    return axios
      .get('/movie/upcoming', {
        params: {
          api_key: moviedbKey,
          page,
        },
      })
      .then((response) => {
        response.data.results.map((item) => {
          const movie = item;
          movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
          return movie;
        });
        return response.data.results;
      })
      .catch(error => (error));
  },
  getNowplayingMovies(page) {
    return axios
      .get('/movie/now_playing', {
        params: {
          api_key: moviedbKey,
          page,
        },
      })
      .then((response) => {
        response.data.results.map((item) => {
          const movie = item;
          movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
          return movie;
        });
        return response.data.results;
      })
      .catch(error => (error));
  },
  searchMovies(message) {
    return axios
      .get('/search/movie', {
        params: {
          api_key: moviedbKey,
          query: message,
        },
      })
      .then((response) => {
        response.data.results.map((item) => {
          const movie = item;
          movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
          return movie;
        });
        return response.data.results;
      })
      .catch(error => (error));
  },
};
