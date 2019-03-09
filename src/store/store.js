import Vue from 'vue';
import Vuex from 'vuex';
import movieServices from '../services/movie';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    searchTerm: '',
    movieList: [],
  },
  mutations: {
    UPDATE_MOVIES: (state, movieList) => {
      state.movieList = movieList;
    },
    CHANGE_SEARCH: (state, searchTerm) => {
      state.searchTerm = searchTerm;
    },
  },
  getters: {
    MOVIES: state => state.movieList,
    SEARCH_TERM: state => state.searchTerm,
  },
  actions: {
    async search(context, searchTerm) {
      const result = await movieServices.searchMovies(searchTerm);
      context.commit('UPDATE_MOVIES', result);
      context.commit('CHANGE_SEARCH', searchTerm);
    },
  },
});
