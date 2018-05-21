<template>
   <div>
      <v-layout row >
         <v-flex xs12 sm6 offset-sm3>
            <v-card transition="slide-x-reverse-transition" >
               <v-toolbar >
                  <v-toolbar-title>All To Do Lists</v-toolbar-title>
               </v-toolbar>
               <v-container v-if="lists.length > 0"><v-flex  v-for="l in lists" :key="l.id">
                     <v-card class="my-3">
                        <v-card-title primary-title>
                           <v-list-tile-title class="my-2 title">{{l.title}}</v-list-tile-title>
                           <v-list-tile-sub-title>[{{l.id}}]</v-list-tile-sub-title>
                        </v-card-title>
                        <v-card-actions>
                           <v-btn flat @click="() => {navigateToList(l.id)}">View List</v-btn>
                           <v-btn flat color="red" @click="() => {deleteList(l.id)}">Delete</v-btn>
                        </v-card-actions>
                     </v-card>
               </v-flex></v-container>
               <v-container v-else><v-flex >

               </v-flex></v-container>

            </v-card>
         </v-flex>
      </v-layout>
     <v-layout row >
         <v-flex xs12 sm6 offset-sm3>
           <v-btn block color="blue" dark xs12 sm6 offset-sm3 @click="showListDialog">New List</v-btn>
           </v-flex>
           </v-layout>
<v-dialog v-model="newListDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <div class="title">New List Title</div>
          </v-card-title>
          <v-card-text>
            <v-text-field
                     v-model="newListTitle"
                     label="New List Title"
                     @keyup.enter.prevent="addList"
                     required
                     ></v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import uuid from 'uuid/v1'
import { mapState } from 'vuex'
import ToDo from '@/components/ToDo'
import ItemsView from '@/components/ItemsView'
export default {
  name: 'ListsView',
  data: function () {
    return {
      newListTitle: '',
      newListDialog: false
    }
  },
  components: {ToDo, ItemsView},
  computed: {
    ...mapState(['lists'])
  },
  methods: {
    navigateToList (listId) {
      this.$router.push({name: 'ListView', params: { listId }})
    },
    deleteList (listId) {
      this.$store.dispatch('deepDeleteList', listId)
    },
    showListDialog (e) {
      this.newListDialog = true
    },
    addList (e) {
      let tt = this.newListTitle.charAt(0).toUpperCase() + this.newListTitle.slice(1)
      this.$store.commit('addList', { id: uuid(), title: tt })
      this.newListTitle = ''
      this.newListDialog = false
    }
  }
}
</script>
