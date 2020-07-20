<template>

	<v-container>
		

	  		<v-layout row class="justify-center ma-2" >
	  			<v-flex md6>
	  				<v-text-field
	  				v-model="search"

	  				@keyup="handleSearch"

	  			
	  				label="SearchItem"
	  				placeholder="Filter by email"

	  				required
	  				
	  				>
	  					
	  				</v-text-field>
	  			</v-flex>
	  			
	  		</v-layout>

	  		<v-layout row color="#000">

	  			<v-flex>
	  				public_id
	  			</v-flex>
	  			<v-flex>
	  				Email
	  			</v-flex>
	            <v-flex>
	            	
	            	Role
	            </v-flex>	

	            <v-flex>
	            	Articles
	            </v-flex>	
	            <v-flex>
	            	Actions
	            </v-flex>	
	  		</v-layout>

	  	  <v-layout v-for="item in getUsers" :key="item.public_id" class="mt-5 filter-items">
	  	  	<v-flex>
	  	  		{{item.public_id}}
	  			</v-flex>
	  			<v-flex>
	  				{{item.email}}
	  			</v-flex>
	            <v-flex>
	            	{{item.role}}
	            </v-flex>	

	            <v-flex>
	            	{{item.articles}}
	            </v-flex>	

	  	  	   <v-flex>
	  	  	   	<v-btn class="pa-2 btn" @click="handleDelete(item.public_id)">DELETE</v-btn>
	  	  	   	<v-btn @click="upgradeRole(item.public_id)">UPGRADE</v-btn>

	  	  	   </v-flex>
	  	  </v-layout>

	</v-container>
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {

  name: 'admin',

 computed:{
 	...mapGetters(["getUsers"])

 },

 async created(){

 	 await this.getUsers

 },

  methods:{

  ...mapActions(['deleteUser','upgradeUser']),


  upgradeRole(public_id){

  	this.upgradeUser(public_id)

  },

  	// ...mapActions(["deleteUser"]),

  handleDelete:function(public_id){

  	this.deleteUser(public_id)
  	// console.log(public_id)

  	// testUser()


  },

  handleSearch:function(e){
  	// console.log(e.target.value)

  	let filterItems=document.querySelectorAll(".filter-items")
  	let filterArray=Array.from(filterItems)
  	
  	let value=this.search.toUpperCase()


  	filterArray.forEach((item)=>{

  	
  		let itemEmail=item.firstElementChild.nextElementSibling.textContent.toUpperCase()
  			// console.log(itemEmail.indexOf(value)>-1)

  		
  		item.style.display=itemEmail.indexOf(value)>-1?"":"none"
  		
  	})

  
  }

  },

  data () {
    return {

    	search:"",
    	items:[
    	 {
    	 	public_id:"Dewafwefwef",
    	 	email:"alexandrt.com",
    	 	role:"Admin",
    	 	articles:4

    	 },
    	  {
    	 	public_id:"Dewfwesfdswef",
    	 	email:"Sandra.com",
    	 	role:"Admin",
    	 	articles:1

    	 },

    	
    	 	 {
    	 	public_id:"Dewfwqefwef",
    	 	email:"Jenna.com",
    	 	role:"Admin",
    	 	articles:0

    	
    	 }
    	]



    }
  }
}
</script>

<style lang="css" scoped>

.btn{
	/*border: none;*/
	background-color:red;
	color:#000;
	border-radius: 6px;
	margin: 5px;

}
.btn:hover{
	/*background-color: coral;*/
}
</style>