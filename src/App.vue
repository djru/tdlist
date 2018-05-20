<template>
  <v-app
    id="app"
    dark
  >
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >

      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">To Do List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
          @keyup="updateSearch"
          v-model="searchTerm"
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      drawer: false,
      searchTerm: ''
    }
  },
  methods: {
    updateSearch: function (e) {
      this.$store.commit('setSearchTerm', this.searchTerm)
    }
  }
}
</script>
