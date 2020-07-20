<template>

	<div>

		<v-navigation-drawer temporary app v-model="drawer" color="#333 darken-3" dark ></v-navigation-drawer>
		<v-toolbar  color="#D84315  "  dark >

			 <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon left>

			<v-toolbar-title class="display-1">BLOGS</v-toolbar-title>

           <v-spacer></v-spacer>
			<v-toolbar-items  >
                      <!--   <v-text-field
				            label="Search item"
				            single-line
				          ></v-text-field> -->

						<v-btn  text  v-for="item in items" :key="item.path" :to="item.path">{{item.name}}</v-btn>

			</v-toolbar-items>

		</v-toolbar>
	</div>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {

    	drawer: false,

    	items:[
    	{
    		name:"home",
    		path:"/"

    	},
    	{
    		name:"sign up",
    		path:"/signup"
    	},
    	{
    		name:"sign in",
    		path:"/signin"
    	},
    	{
    		name:"createArticle",
    		path:"/createArticle"
    	},
      {
        name:"admin",
        path:"/users/admin"

      }
    	]

    }
  },

  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
