const axios = require("axios");
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default {
    getTopratedMovies() {
        return axios
            .get("/movie/top_rated", {
                params: {
                    api_key: "b4fa962034248325aeb93bb096e247de"
                }
            })
            .then(response => (response.data.results))
            .catch(error => (error))
    },
    getUpcomingMovies() {
        return axios
            .get("/movie/upcoming", {
                params: {
                    api_key: "b4fa962034248325aeb93bb096e247de"
                }
            })
            .then(response => (response.data.results))
            .catch(error => (error));
    }
}