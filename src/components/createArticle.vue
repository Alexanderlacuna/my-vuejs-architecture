<template>

	<v-container>


		<form @submit.prevent="handleCreate">

			<v-layout row>

			<v-flex md6 offset-md3>
				CREATE AN ARTICLE
			</v-flex>
			
		</v-layout>

		<v-layout>
			
			<v-flex md6 offset-md3>

				<v-text-field
				label="title"
				value="write your title here"
				v-model="title"
				>
					
				</v-text-field>

				
			</v-flex>
		</v-layout>


		<v-layout>

			<v-flex md6 offset-md3>

					<v-textarea
      name="input-7-1"
      filled
      label="Your description goes here"

      v-model="description"
     
      
    ></v-textarea>
				

			</v-flex>
	
		</v-layout>


		<v-layout >
			
			<v-flex md6 offset-md3>
				<v-btn block color="#333"   :disabled="!formIsValid" type="submit" >SUBMIT</v-btn>
			</v-flex>
		</v-layout>

			


		</form>
		
		
		
	</v-container>
</template>

<script>
import {mapActions} from "vuex"
export default {

  name: 'createArticle',

  data () {
    return {

    	title:"",
    	description:""


    }
  },

 computed:{

 	formIsValid:function(){

 		if(this.description && this.title){
 			return true
 		}
 	}


 },
  methods:{


  	...mapActions(["createArticle"]),

  	handleCreate:function(){
  		if(this.title && this.description){
  			let payload={
  				title:this.title,
  				description:this.description
  			}


  			this.createArticle(payload)
  		}

  	}
  }
}
</script>

<style lang="css" scoped>
</style>