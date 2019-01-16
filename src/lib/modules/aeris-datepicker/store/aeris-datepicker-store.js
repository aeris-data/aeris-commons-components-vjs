export default {
  state: {
    fromDate: "",
    toDate: ""
  },

  getters: {
    getFromDate: state => state.fromDate,
    getToDate: state => state.toDate
  },

  mutations: {
    setFromDate(state, fromDate) {
      state.fromDate = fromDate;
    },
    setToDate(state, toDate) {
      state.toDate = toDate;
    }
  }
};
