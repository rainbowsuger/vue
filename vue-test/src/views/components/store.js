import Vuex from 'vuex'

const moduleA = {
  namespaced: true,
  state: {
    name: 'MODULEA'
  },
  getters: {
    getModuleName (state) {
      return `moduleA模块名称：${state.name}`
    }
  }
  // ... mutation、action
}
const createStore = () => {
  const store = new Vuex.Store({
    namespaced: true, // 带有名字命名空间，内部方法数据会根据模块注册的路径调整命名
    modules: {
      myModuleA: moduleA
    },
    state: {
      'name': '项目名称',
      'menus': {
        'name': '菜单名称',
        'router': '菜单路由',
        'code': '菜单唯一标识',
        'children': []
      },
      'user': {
        'name': '用户名称'
      },
      persons: [
        {name: 'rain', age: 24, sex: '男'},
        {name: 'rainbow', age: 25, sex: '男'},
        {name: 'suger', age: 24, sex: '女'},
        {name: 'isla', age: 23, sex: '女'},
        {name: 'jay', age: 23, sex: '男'}
      ]
    },
    getters: {
      personAge: (state) => (age) => {
        return state.persons.filter(item => { return item.age === age })
      },
      personAge23 (state) {
        return state.persons.filter(item => { return item.age === 23 })
      },
      personAge25 (state) {
        return state.persons.filter(item => { return item.age === 25 })
      },
      // 第二个参数可以为getter
      personAge24Female: (state, getters) => {
        return getters.personAge23.filter(item => { return item.sex === '男' })
      }
    },
    mutations: {
      // mutation 必须是同步函数
      mutationsPersons1 (state, {name = ''}) {
        state.persons[0].name = name
      },
      mutationsPersons2 (state, payload) {
        state.persons[1].name = payload.name
      },
      mutationsPersons3 (state, payload) {
        state.persons[2].name = payload.name
      },
      mutationsPersons4 (state, payload) {
        state.persons[3].name = payload.name
      }
    },
    actions: {
      activePerson3 (context, payload) {
        context.commit('mutationsPersons3', payload)
      },
      // actions 异步函数
      activePerson4 (context, payload) {
        setTimeout(() => {
          context.commit('mutationsPersons4', payload)
        }, 1000)
      }
    }
  })
  const moduleB = {
    namespaced: true, // 分模块必写
    state: {
      name: 'MODULEB'
    },
    getters: {
      getModuleName (state) {
        return `moduleB模块名称：${state.name}`
      }
    }
    // ... mutation、action
  }
  // 注册嵌套模块 `nested/myModule`
  store.registerModule('myModuleB', moduleB)
  return store
}

export default createStore
