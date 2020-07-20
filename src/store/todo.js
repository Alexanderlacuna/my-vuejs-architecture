
import route from "@/router/index"
const state = {



	   blogs: [

  ],
  public_id: "",
  token: null,
  users:[]

}

const mutations = {

  COMMIT_ARTICLES: (state, payload) => state.blogs = payload,

  UPDATE_ARTICLE:(state,payload)=>{
  	let index=state.blogs.findIndex((blog)=>blog.article_id==payload.article_id)

  	console.log(index)
  	if (index>-1) {
  		// means it exists

  		return state.blogs.splice(index,1,payload)

  		// statement
  	}
  },

  DELETE_ARTICLE:(state,payload)=>state.blogs=state.blogs.filter((blog)=>blog.article_id!=payload),

  ADD_ARTICLE:(state,payload)=>state.blogs.unshift(payload),
  ASSIGN_ID: (state, payload) => state.public_id = payload,
  SET_TOKEN: function(state,payload){
  	state.token=payload

  },
  ADD_USERS:(state,payload)=>{

    return state.users=payload
   

  	


 

},
DELETE_USER:(state,payload)=>{
  return state.users= state.users.filter((user)=>user.public_id!=payload)

}
}

const actions = {


  async upgradeUser({commit},payload){

    try{

   let response=await axios.put(`http://localhost:5000/users/promoteUser/${payload}`)
   console.log(response)
    }

    catch(err){
      console.log(err.response||err)
    }


  },

  async testUser({commit}){
    console.log("DEWd")
  },

  async deleteUser({commit},payload){
    
    try{

      console.log(payload)

      let response=await axios.delete(`http://localhost:5000/users/deleteUser/${payload}`)

      
      let {message}=response.data
      console.log(message)

      commit("DELETE_USER",message)

    }
    catch(err){
      console.log(err || err.response)
    }

  },
 async getUsers({commit}){

  

  try{

    let response=await axios.get("http://localhost:5000/users/getAllUser")
    // let payload=users.data
    // console.log(users.data)
    // console.log(payload)
    let {users}=response.data
    console.log(users)

    commit("ADD_USERS",users)

  }
  catch(err){
    console.log(err.response ||err)
  }

 },

	async update2({commit},payload){
		console.log("Received")
	},


	async deleteArticle({commit,state},payload){

		let {token}=state

		try{

			let response=await axios.delete(`http://localhost:5000/deleteArticle/${payload}?token=${token}`)

			console.log(response.data)

			commit("DELETE_ARTICLE",payload)

			route.push("/")

		}

		catch(err){
			console.log(err.response || err)
		}


	},


	async updateArticle({commit,state},payload){



		try{

			let {token}=state

			console.log(payload)


			let response=await axios.put(`http://localhost:5000/updateArticle/${payload.article_id}?token=${token}`,{
				title:payload.title,
				description:payload.description
			})

			console.log(response.data)

			commit("UPDATE_ARTICLE",response.data)
		}

		catch(err){
			console.log(err.response || err)
		}

	},

  async registeUser ({ commit }, payload) {

  	try{

  		let response=await axios.post("http://localhost:5000/users/signup",{
  			email:payload.email,
  			password:payload.password
  		})

  		console.log(response)

  		route.push("/")

  	}

  	catch(err){
  		console.log(err.response)
  	}

  	

  

  	// let response=await axios.get("localhost:5000/users/test")
  	// let data=response.json()
  	// console.log(data)

  },

  async getArticles({commit}){

  	try{
      let response=await axios.get("http://localhost:5000/getAllArticles")

      // console.log(response.data)

      let {articles}=response.data

      commit("COMMIT_ARTICLES",articles)
  	}

  	catch(err){

  		console.log(err.response || err)

  	}

  },


  async loginUser({commit},payload){


  


  		try{
  		let response=await axios.post("http://localhost:5000/users/login",{
  			email:payload.email,
  			password:payload.password
  		})

  		let {token}=response.data


  		commit("SET_TOKEN",token)
  		console.log("Set  ...")

  		route.push("/")
  		// console.log(i)


  	}

  	catch(err){
  		console.log(err.response)
  		// console.log(i)
  	}


  
  	
  },


  async createArticle({commit,state,getters},payload){


  	try{

  		
  		let {token}=state

  		  	let response=await axios.post(`http://localhost:5000/createArticle?token=${token}`,{
  			title:payload.title,
  			description:payload.description,
  			
  			
  		},)

  		let {message}=response.data

  		commit("ADD_ARTICLE",message)

  	}

  	catch(err){

      console.log("Error here")
  		console.log(err.response || err)




  	}



  }




}

const getters = {

  getBlogs: (state) => state.blogs,
  getToken:(state)=>state.token,

  getArticle:(state)=>(id)=>state.blogs.filter((blog)=>blog.article_id==id),

  getUsers:(state)=>state.users

}

export default {
  mutations,
  actions,
  getters,
  state
}
