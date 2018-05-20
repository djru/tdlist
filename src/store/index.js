import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const writeToLocal = store => {
  store.subscribe((m, s) => {
    localStorage.setItem('todo-items-list', JSON.stringify(s))
    console.log('saved state to locastorage with key `todo-items-list`')
  })
}

export default new Vuex.Store({
  state: {
    todos: [],
    searchTerm: ''
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, id) {
      state.todos = this.state.todos.filter(e => {
        return e.id !== id
      })
    },
    setSearchTerm (state, term) {
      state.searchTerm = term
    },
    initializeFromLocal (state) {
      if (localStorage.getItem('todo-items-list')) {
        Object.assign(state, JSON.parse(localStorage.getItem('todo-items-list')))
        console.log('state retrieved from local storage')
      }
    }
  },
  getters: {
    getTodosFromSearchTerm (state) {
      let term = state.searchTerm.toLowerCase()
      return state.todos.filter(s => s.text.toLowerCase().indexOf(term) > -1)
    }
  },
  plugins: [writeToLocal]

})
