<template>
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
                                id="name"
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
                            id="address"
                            rows="5"
                            class="form-control"
                            v-model="address"></textarea>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">Gender
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
                            @click="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <!-- <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Name:{{userData.name}}</p>
                        <p>Mail:{{userData.email}}</p>
                        <p>Password:{{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space:pre">Address:{{address}} </p>
                        <p>Gender:{{gender}}</p>
                    
                    </div>
                </div>
            </div>
        </div>-->
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
               address:'',
               
               gender:'Male',
            //    isSubmitted:false
            }
        },
        methods:{
       submitted(){
        //    this.isSubmitted=true;
          this.$router.push('/login')
}

        }
        
    }
</script>

<style>

</style>
