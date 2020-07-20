<template>

  <div>
    <h1>{{getData.title}}</h1>

    <p>{{getData.description}}</p>


    <v-btn color="#ff0000" class="mt-3" @click="handleClick">delete</v-btn>



    <div data-app>
     <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="50%"
      min-height="800"
  
    >
      <v-card>
        <v-card-title class="headline">Update Article</v-card-title>

        <v-card-text>
          

          <form @submit.prevent="handleCreate">

      <v-layout row>

      
      
    </v-layout>

    <v-layout>
      
      <v-flex md10 offset-md1>

        <v-text-field
        label="title"
        value="write your title here"
        v-model="title"
        >
          
        </v-text-field>

        
      </v-flex>
    </v-layout>


    <v-layout>

      <v-flex md10 offset-md1>

          <v-textarea
      name="input-7-1"
      filled
      label="Your description goes here"

      v-model="description"
     
      
    ></v-textarea>
        

      </v-flex>
  
    </v-layout>


 
      


    </form>
    
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="handleUpdate"
          >
           Agree
          </v-btn>

          <v-btn
            color="#333 darken-1"
           
            @click="dialog = false"
          >
            Disagree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

    </div>
   
  </div>
</template>

<script>

import {mapGetters,mapActions} from "vuex"
export default {

  name: 'Blog',

 
  methods:{

    ...mapActions(["deleteArticle","updateArticle"]),
     handleUpdate(){


         console.log(this.title,this.description)

         let payload={
          article_id:this.getData.article_id,
          title:this.title,
          description:this.description
         }

        this.dialog=false
        this.updateArticle(payload)
       

      },

    handleClick(){

      this.deleteArticle(this.getData.article_id)

    }

  },

  computed:{
     ...mapGetters(["getArticle"]),

     getData(){
      return  this.getArticle(this.$route.params.id)[0]
     }

    

    },



  async created(){

    this.title=this.getData.title,
    this.description=this.getData.description


   

    // let obj=await this.getArticle(this.$route.params.id)[0]

    // console.log(obj
   

    // this.items=await this.getArticle(this.$route.params.id)[0]

    




   


  },

  data () {
    return {

      items:{},
      dialog:false,
      title:"",
      description:""
    }
  }
}
</script>

<style lang="css" scoped>
</style>