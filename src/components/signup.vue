<template>

	  <v-container>

	  	<form class="mt-3 form-control" @submit.prevent="handleSubmit">
	  		<v-layout row class="justify-center mb-2">
                     <v-flex md6 class="text-center   pa-3" color="#000 sdarken-2">SIGN UP</v-flex>
	  		</v-layout>

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

	  				<v-btn large block class="ma-2 pink--text darken-2" type="submit"  :disabled="!formIsValid">SUBMIT</v-btn>
	  			</v-flex>

	  		</v-layout>

	  	</form>
	  </v-container>

</template>

<script>

import {mapActions} from "vuex"
export default {

  name: 'signup',

  data () {
    return {
      email: '',
      password: '',
      show: false,
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },

  methods:{

  	...mapActions(["registeUser","createArticle"]),

  	handleSubmit(){
  		let payload={
  			email:this.email,
  			password:this.password
  		}

  		this.registeUser
  		(payload)
  	}

  },
  computed: {
  	formIsValid () {
  		const passwordLength = this.password.length > 8
  		const emailValidity = this.pattern.test(this.email)

  		if (passwordLength && emailValidity) {
  			return true
  		}

  		// console.log("hello")
  		// if(this.email &&this.password){

  		// 	return true

  		// }
  	},

  	checkpassword () {
  		return this.password.length < 8 ? 'password must be atleast 8 characters' : ''
  	},
  	checkEmail () {
  		 return this.pattern.test(this.email) ? '' : 'valid email is required'
  	}
  }
}
</script>

<style lang="css" scoped>
</style>
