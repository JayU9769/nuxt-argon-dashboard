export const state = () => ({
  user: {
    name: "Parmar Jaydeep"
  },
})

export const mutations = {
  SET_USER_NAME(state, payload) {
    state.user = payload;
  }
}

export const actions = {
  addUserName(vuexContext, payload) {
    vuexContext.commit('SET_USER_NAME', payload);
  }
}

export const getters = {
  getUser: (state) => {
    return state.user
  },
}
