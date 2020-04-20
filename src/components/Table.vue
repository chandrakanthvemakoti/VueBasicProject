<template>
   <div>
  
<table class="table table-hover table-bordered">
  <thead>
          <tr>
              <th v-for="(column, index) in columns" :key="index"> {{column}}</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) in items" :key="index">
              <td v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}</td>
          </tr>
      </tbody>
</table>


   





   <!-- <div class="col-sm-6">
<table class="table table-hover table-bordered">
  <thead>
          <tr>
              <th v-for="(header, index) in headers" :key="index"> {{header}}</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(content, index) in contents" :key="index">
              <td v-for="(header, indexValue) in headers" :key="indexValue">{{content[header]}}</td>
          </tr>
      </tbody>
</table>


   </div> -->

   </div>
</template>

<script>

export default {

props:['items','columns']
    


 
 
}
</script>
<style scoped>
.container{
  padding: 30px;
  
}
</style>