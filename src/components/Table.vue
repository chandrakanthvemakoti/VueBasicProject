<template>
    <div class="row">
       <div class="col-sm-6">
   <table class="table table-bordered ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
       <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user,index in users">
      <th scope="row">{{index + 1}}</th>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.website}}</td>
      <td>{{user.address.city}}</td>

    </tr>
    
      
  </tbody>
</table>
   </div>


   <div class="col-sm-6">
   <table class="table table-bordered ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Completed</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="todo,index in todos">
      <th scope="row">{{index + 1}}</th>
      <td>{{todo.title}}</td>
      <td>{{todo.completed}}</td>

    </tr>
    
      
  </tbody>
</table>
   </div>
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            users:[],
            todos:[]
        }
    },
    created(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => this.users=res.data)
  .catch(error => console.log(error));

  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.todos=res.data)
  .catch(error => console.log(error));

    }
    
}
</script>