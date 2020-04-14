<template>
   <div class="container">
<table class="table table-hover">
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


</template>

<script>

export default {

props:['users']
 
}
</script>
<style scoped>
.container{
  padding: 30px;
  
}
</style>