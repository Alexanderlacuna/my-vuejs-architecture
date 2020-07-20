<template>
<div>

	<div v-for="blog in getBlogs " :key="blog.article_id"  >
		{{blog.title}}
		{{blog.content}}

		<v-btn :to="`articles/${blog.article_id}`">click</v-btn>
	</div>

</div>

</template>

<script>

import { mapGetters } from 'vuex'
export default {

  name: 'home',

  computed: {
  	...mapGetters(['getBlogs'])
  },

  data () {
    return {
      blogs: [

        {
      	id: 1,
      	title: 'this is the first item',
      	content: 'this is the 1 content'
        },
        {
      	id: 2,
      	title: 'this is the second item',
      	content: 'this is content 2'
        }, {
      	id: 3,
      	title: 'this is the third item',
      	content: 'this is content 3'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>

*{
	padding: 0;
	margin: 0;
	overflow-x: hidden;
}

 .content{
 	min-height: 100vh;
     justify-content: center;
     align-items: center;
     text-align: center;

 }
</style>
