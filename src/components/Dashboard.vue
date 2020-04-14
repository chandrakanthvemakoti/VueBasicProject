

<template>
    <div class="dash">
   <h1>MY DASHBOARD</h1>
   <hr>
    <app-table :users="users"></app-table>
   </div>



   </template>
    
    <script>
     import axios from 'axios';
      import Table from './Table.vue';
      export default{
         

         data(){
  return{
    users:[]
  }
 },

    
    created(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => this.users=res.data)
  .catch(error => console.log(error));



    },
    


          components:{
            appTable: Table
          }
          
      }
    </script>

<style scoped>
.dash{
    text-align: center;
}
</style>