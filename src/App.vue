<template>
  <div >

    <navbar/>

    <router-view/>

  </div>
</template>

<script>

import navbar from '@/components/navbar.vue'
import {mapActions} from "vuex"
export default {
  name: 'App',

  components: {
    navbar

  },

  data: () => ({
    //
  }),


  methods:{

    ...mapActions(["getArticles","getUsers"])


  },

  async created(){


    await this.getArticles()
   



  }
}
</script>
