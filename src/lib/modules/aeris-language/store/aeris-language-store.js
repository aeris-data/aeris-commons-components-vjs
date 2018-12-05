export default {
  state: {
    language: "en"
  },

  getters: {
    language: state => state.language
  },

  mutations: {
    setLanguage(state, language) {
      state.language = language;
    }
  }
};
