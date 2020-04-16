<template>
    <div class="dash">
   <h1>MY DASHBOARD</h1>
   <hr>
   <div class="col-sm-6">
    <app-table :items="items" :columns="columns"  ></app-table>
    </div>
    <div class="col-sm-6">
    <app-table :items="contents" :columns="headers" ></app-table>
    </div>
    <div class="col-sm-6">
    <app-table :items="contents" :columns="headers" ></app-table>
    </div>
   </div>
   </template>
    <script>
  
      import Table from './Table.vue';
      export default{
     data(){
  return{
   items: [
        {
            'Id':'1',
            'Title': 'Component',
            'Description': 'Vuejs',
            'Created_date': '2020-4-16'
        },
        {
            'Id':'2',
            'Title': 'Component',
            'Description': 'Vuejs',
            'Created_date': '2020-4-16'
        },
        {   
             'Id':'3',
            'Title': 'Component',
            'Description': 'Vuejs',
            'Created_date': '2020-4-16'
        },
        {
            'Id':'4',
            'Title': 'Component',
            'Description': 'Vuejs',
            'Created_date': '2020-4-16'
        }
    ],
    columns: [ 'Id', 'Title', 'Description', 'Created_date'],

    headers: [ 'Id', 'Name', 'Email', 'Role'],

    contents: [
    {
          
          'Id':'1',
          'Name':'Chandu',
          'Email':'chandu@gmail.com',
          'Role':'Developer'
    },
    {
          
          'Id':'2',
          'Name':'Ravi',
          'Email':'Ravi@gmail.com',
          'Role':'salesforce'
    },
    {
          
          'Id':'3',
          'Name':'Shirish',
          'Email':'shirish@gmail.com',
          'Role':'Bpo'
    },
    {
          
          'Id':'4',
          'Name':'Sampath',
          'Email':'sampath@gmail.com',
          'Role':'Teacher'
    }
    ]
    
  }
 },
          components:{
            appTable: Table
          },
   
      }
    </script>
<style scoped>
.dash{
    text-align: center;
}
</style>