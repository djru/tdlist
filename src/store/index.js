import Vuex from 'vuex'
import Vue from 'vue'
import uuid from 'uuid/v1'

Vue.use(Vuex)

const writeToLocal = store => {
  store.subscribe((m, s) => {
    localStorage.setItem('todo-items-list', JSON.stringify({lists: s.lists, items: s.items, searchTerm: ''}))
    console.log('saved state to locastorage with key `todo-items-list`')
  })
}

export default new Vuex.Store({
  state: {
    lists: [{title: 'Example List', id: '123-456-789'}],
    items: [{text: 'Example Item', id: '123-456-789', parentId: '123-456-789'}],
    searchTerm: ''
  },
  mutations: {
    addToDo (state, data) {
      state.items.push({...data, id: uuid()})
    },
    deleteToDo (state, data) {
      console.log(state.items)
      state.items = state.items.filter(i => { return i.id !== data })
    },
    addList (state, data) {
      state.lists.push({title: data.title, id: data.id})
    },
    deleteList (state, data) {
      state.lists = state.lists.filter(l => l.id !== data)
    },
    deleteChildrenItems (state, data) {
      state.items = state.items.filter(i => { return i.parentId !== data })
    },
    initializeFromLocal (state) {
      if (localStorage.getItem('todo-items-list')) {
        Object.assign(state, JSON.parse(localStorage.getItem('todo-items-list')))
      }
    }
  },
  actions: {
    deepDeleteList (context, data) {
      context.commit('deleteList', data)
      context.commit('deleteChildrenItems', data)
    }
  },
  getters: {
    getItems: (state) => (listId) => {
      return state.items.filter((s) => s.parentId === listId)
    },
    getList: (state) => (listId) => {
      return state.lists.filter(l => l.id === listId)[0]
    }
  },
  plugins: [writeToLocal]

})
