<template>

  <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox @click="deleteTodo"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.text}}</v-list-tile-title>
              <v-list-tile-sub-title>[{{item.id}}]</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
</template>

<script>
export default {
  name: 'ToDo',
  props: ['item'],
  methods: {
    deleteTodo (e) {
      this.$store.commit('deleteToDo', this.item.id)
    }
  }
}
</script>
