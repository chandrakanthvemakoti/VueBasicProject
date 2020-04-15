<template>
   <div class="container">
<table class="table table-hover">
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


   </div>


</template>

<script>

export default {

data(){
  return{
    items: [
        {
            'id':'1',
            'title': 'hello',
            'description': 'ok ok',
            'created_date': '2018-09-09'
        },
        {
            'id':'2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
        }
    ],
    columns: [ 'id', 'title', 'description', 'created_date']

  }
}
 
}
</script>
<style scoped>
.container{
  padding: 30px;
  
}
</style>