import Vue from 'vue'

import Vuex from 'vuex'

import { cookie , WechatPlugin} from 'vux'

Vue.use(Vuex)

const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('common', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward',
    isShow:true,
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    },
    upDateIsShow(state,payload) {
      state.isShow = payload.isShow
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})

export default store;
