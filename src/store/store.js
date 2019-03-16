import Vue from 'vue';
import Vuex from 'vuex';
import movieServices from '../services/movie';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    searchTerm: '',
    movieList: [],
    page: 1,
  },
  mutations: {
    UPDATE_MOVIES: (state, movieList) => {
      state.movieList = state.movieList.concat(movieList);
    },
    CHANGE_SEARCH: (state, searchTerm) => {
      state.searchTerm = searchTerm;
    },
    SET_PAGE: (state, page) => {
      state.page = page;
    },
    RESET_STATE: (state) => {
      state.movieList = [];
      state.page = 1;
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
    async topRatedMovies(context) {
      const result = await movieServices.getTopratedMovies(context.state.page);
      context.commit('UPDATE_MOVIES', result);
    },
  },
});
