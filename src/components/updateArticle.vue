<template>

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
				<v-btn block color="#333"    type="submit" >SUBMIT</v-btn>
			</v-flex>
		</v-layout>

			


		</form>
		
		
</template>

<script>
export default {

  name: 'updateArticle',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>