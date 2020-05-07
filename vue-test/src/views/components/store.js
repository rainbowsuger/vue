import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        name: 'mango'
      }
    },
    getters: {
      user (state) {
        return state.user
      }
    },
    mutations: {
      // mutation 必须是同步函数
      mutationsUser (state, payload) {
        state.user = payload
      }
    },
    actions: {
      // actions内部支持执行异步操作
      actionsUser ({ commit }, payload) {
        setTimeout(() => {
          commit('mutationsUser', payload)
        }, 200)
      }
    }
  })
}

export default createStore
