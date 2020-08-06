export const state = () => ({
  text: 'Home',
  showLogin: false
})

export const mutations = {
  changeText (state) {
    if (state.text === 'Home') {
      state.text = 'Dashboard'
    } else if (state.text === 'Dashboard') {
      state.text = 'Home'
    }
  },
  toggleLogin (state) {
    if (state.showLogin === false) {
      state.showLogin = true
    } else if (state.showLogin === true) {
      state.showLogin = false
    }
  }
}