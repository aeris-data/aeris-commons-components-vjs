export default {
  state: {
    orcid: ""
  },

  getters: {
    getOrcid: state => state.orcid
  },

  mutations: {
    setOrcid(state, orcid) {
      state.orcid = orcid;
    }
  }
};
