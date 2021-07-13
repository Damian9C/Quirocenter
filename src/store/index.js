import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser( state, data ){
      state.user = data;
    }
  },
  actions: {
    setUserData( context, data ){
      context.commit( "setUser", data );
    }
  },
  modules: {
  }
})