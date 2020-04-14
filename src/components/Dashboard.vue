

<template>
    <div class="dash">
   <h1>MY DASHBOARD</h1>
    <app-table></app-table>
   </div>



   </template>
    
    <script>
      import Table from './Table.vue'
      export default{
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