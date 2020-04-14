<template>
    <div class="container">
     <v-client-table
       :data="tableData"
       :columns="columns"
       :options="options"
         >
     </v-client-table>


    </div>


</template>

<script>
import axios from 'axios';
export default {

  data(){
    return{
      columns:['id','name','email','website','phone'],
      tableData:[],
      options:{
        headings:{
          id: 'ID',
          name:'NAME',
          email:'EMAIL',
          website:'WEBSITE',
          phone:'PHONE'
          
        },
        sortable:['name','email'],
        filterable:['name','email']
      }
    }
  },

    
    created(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => this.tableData=res.data)
  .catch(error => console.log(error));



    }
    
}
</script>
<style scoped>
.container{
  padding: 30px;
  
}
</style>