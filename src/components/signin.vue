<template>

	  <v-container>

	  	<v-layout row class="justify-center mb-2">
                     <v-flex md6 class="text-center   pa-3" color="#000 sdarken-2">SIGN INz</v-flex>	  			
	  		</v-layout>
	  	
	  	<form class="mt-3 form-control" @submit.prevent="handleSubmit">
	  		

	  		<v-layout row class="justify-center ma-2" >
	  			<v-flex md6>
	  				<v-text-field
	  				v-model="email"
	  				color="pink darken-2"
	  				label="Email"

	  				required
	  				:rules="[checkEmail]"
	  				>
	  					
	  				</v-text-field>
	  			</v-flex>
	  			
	  		</v-layout>


	  		<v-layout row class="justify-center ma-2" >
	  			<v-flex md6>
	  				<v-text-field
	  				v-model="password"
	  				
	  				label="Password"
	  				:append-icon="show  ? 'mdi-eye' :'mdi-eye-off'"
	  				:type="show ? 'text': 'password'"
	  				:rules="[checkpassword]"
	  				required
	  				color="red"
	  				@click:append="show=!show"
	  				>
	  					
	  				</v-text-field>
	  			</v-flex>
	  			
	  		</v-layout>

	  		<v-layout row class="justify-center mt-2">

	  			<v-flex md6>
	  				
	  				<v-btn large block class="ma-2 pink--text darken-2"  type="submit" :disabled="!formIsValid">SUBMIT</v-btn>
	  			</v-flex>
	  			
	  		</v-layout>


	  	</form>


	  </v-container>


</template>

<script>

import {mapActions} from "vuex"
export default {

  name: 'signin',

  data () {
    return {
      email:"",
      password:"",
      email2:"",
      show:false,
       pattern : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },
  computed:{


 formIsValid: function (){

 	const passwordLength = this.password.length > 8
  		const emailValidity = this.pattern.test(this.email)

  		if (passwordLength && emailValidity) {
  			return true
  		}

 },

 checkpassword:function(){
 	return this.password.length < 8 ? 'password must be atleast 8 characters' : ''
 },
 checkEmail:function(){
 	return this.pattern.test(this.email) ? '' : 'valid email is required'
 },

 test2:function(){
 	console.log("fewfiwjbe")
 }





  	
  	
},
methods:{


	...mapActions(['loginUser']),

handleSubmit:function(){

	let payload={
		email:this.email,
		password:this.password
	}
	this.loginUser(payload)

	this.resetForm()
},

resetForm:function(){


	this.email=""
	this.password=""
	return
	
		 
}


}
}
</script>

<style lang="css" scoped>
</style>