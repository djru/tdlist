<template>
  <div>
  <v-layout row >
    <v-flex xs12 sm6 offset-sm3>
      <v-card transition="slide-x-transition">
        <v-toolbar >
            <v-btn
                    icon
                    large
                    @click="$router.push({path:'/'})"

                  >
                    <v-icon large>arrow_back</v-icon>
                  </v-btn>
          <v-toolbar-title>{{this.list.title}}</v-toolbar-title>
        </v-toolbar>
        <v-container class="px-3">
           <v-text-field
      v-model="toDoText"
      label="New Item"
      @keyup.enter.prevent="addToDo"
      required
    ></v-text-field>
        </v-container>
<v-divider v-if="items.length"></v-divider>
      </v-card>
    </v-flex>
  </v-layout>
  <ItemsView :items="items"></ItemsView>
</div>

</template>

<script>

import ItemsView from '@/components/ItemsView'
export default {
  name: 'ListView',
  data: function () {
    return {
      toDoText: '',
      list: this.$store.getters.getList(this.$route.params.listId)
    }
  },
  computed: {items: function () { return this.$store.getters.getItems(this.list.id) }},
  components: {
    ItemsView
  },
  methods: {
    addToDo: function (e) {
      let tt = this.toDoText.charAt(0).toUpperCase() + this.toDoText.slice(1)
      console.log(this.list)
      this.$store.commit('addToDo', { text: tt, parentId: this.list.id })
      this.toDoText = ''
    }
  }
}
</script>
