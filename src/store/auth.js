/* global localStorage */

import User from '@/models/User'
import * as MutationTypes from './mutation-types'

const state = {
  user: User.from(localStorage.token) // init state.user from the token if it exists
}

const mutations = {
  [MutationTypes.LOGIN] (state) {
    state.user = User.from(localStorage.token) // set state.user from the token
  },
  [MutationTypes.LOGOUT] (state) {
    state.user = null // clear state.user
  }
}

const getters = {
  currentUser (state) {
    return state.user // returns state.user
  }
}

const actions = {
  login ({ commit }) {
    commit(MutationTypes.LOGIN)
  },

  logout ({ commit }) {
    commit(MutationTypes.LOGOUT)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
