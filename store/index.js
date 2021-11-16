export const state = () => ({
  sidebarPinned: false,
})

export const mutations = {
  TOGGLE_SIDEBAR(state) {
    localStorage.setItem('sideBar', !state.sidebarPinned)
    state.sidebarPinned = !state.sidebarPinned;
  }
}

export const actions = {
  toggleSidebar(vuexContext) {
    vuexContext.commit('TOGGLE_SIDEBAR');
  }
}

export const getters = {
}
