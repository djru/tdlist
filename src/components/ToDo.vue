<template>

  <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox @click="deleteTodo"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{todo.text}}</v-list-tile-title>
              <v-list-tile-sub-title>[{{todo.id}}]</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    deleteTodo (e) {
      this.$store.commit('removeTodo', this.todo.id)
    }
  }
}
</script>
