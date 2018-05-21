<template>
<v-layout row>
         <v-flex xs12 sm6 offset-sm3 >

                  <v-card>
                     <v-list two-line subheader>
                        <Todo v-for="i in items" :item="i" :listId="i.parentId" :key="i.id"/>
                     </v-list>
                  </v-card>

         </v-flex>
      </v-layout></template>

<script>

import Todo from '@/components/ToDo'
export default {
  name: 'ItemsView',
  components: {
    Todo
  },
  props: ['items']
}
</script>
