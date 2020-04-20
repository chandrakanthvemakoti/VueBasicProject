<template>

    
    <div>
   <app-header></app-header>
  
   <router-view></router-view> 
 
            </div>
       

</template>

<script>
import Header from './components/Header.vue'

    export default {
    

        components:{
            appHeader: Header,
         
    
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>User Registration</h1>
                    <hr>
                        <div class="form-group">
                        <label for="name">Name</label>
                        <input
                                type="text"
                                id="Name"
                                class="form-control"
                                v-model="userData.name">
                    </div>

                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Address</label><br>
                    
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="address"></textarea>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
           
           
            
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
    </div>
</template>

<script>

    export default {
        data(){
            return{
               userData:{
                   name:'',
                   email:'',
                   password:'',
                   age:'25'
               },
               address:'Text here',
               
               gender:'Male',
               isSubmitted:false
            }
        },
        methods:{
       submitted(){
           this.isSubmitted=true;
       }

        },
       

    }
</script>

<style>
body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

</style>
