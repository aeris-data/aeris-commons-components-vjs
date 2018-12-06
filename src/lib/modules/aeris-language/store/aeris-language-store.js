export default {
  state: {
    language: "en"
  },

  getters: {
    getLanguage: state => state.language
  },

  mutations: {
    setLanguage(state, language) {
      state.language = language;
    }
  }
};
