<template>
  <v-app
    id="app"

  >
    <v-toolbar

      dense
      fixed
      clipped-left
      app
    >

      <v-toolbar-title class="mr-2 align-center title">
       To Do List
      </v-toolbar-title>
      <v-spacer></v-spacer>

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
  name: 'App'
}
</script>
