export default {
  state: {
    primaryColor: "#0b6bb3",
    secondaryColor: "#f39c12"
  },

  getters: {
    getPrimaryColor: state => state.primaryColor,
    getSecondaryColor: state => state.secondaryColor
  },

  mutations: {
    setPrimaryColor(state, primaryColor) {
      state.primaryColor = primaryColor;
    },
    setSecondaryColor(state, secondaryColor) {
      state.secondaryColor = secondaryColor;
    }
  }
};
