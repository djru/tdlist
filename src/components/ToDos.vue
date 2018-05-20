<template>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>To Do Items</v-toolbar-title>
        </v-toolbar>
        <v-container class="px-3">
           <v-text-field
      v-model="todoText"
      label="New Item"
      @keyup.enter.prevent="addTodo"
      required
    ></v-text-field>
        </v-container>
<v-divider v-if="getTodosFromSearchTerm.length > 0"></v-divider>
        <v-list two-line subheader>
          <Todo v-for="t in getTodosFromSearchTerm" :todo="t" :key="t.id"/>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import uuid from 'uuid/v1'
import Todo from '@/components/ToDo'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  data: function () {
    return {
      todoText: ''
    }
  },
  computed: {...mapState(['todos']), ...mapGetters(['getTodosFromSearchTerm'])},
  components: {
    Todo
  },
  methods: {
    addTodo (e) {
      let tt = this.todoText.charAt(0).toUpperCase() + this.todoText.slice(1)
      this.$store.commit('addTodo', { id: uuid(), text: tt })
      this.todoText = ''
    }
  }
}
</script>
