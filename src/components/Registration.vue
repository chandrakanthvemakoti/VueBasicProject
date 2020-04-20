<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>User Registration</h1>
                    <hr>
                    <div class="form-group" :class="{invalid: $v.name.$error}">
                        <label for="name">Name</label>
                        <input
                                type="text"
                                id="name"
                                class="form-control"
                                @blur="$v.name.$touch()"
                                v-model="name">
                    </div>
                    <p v-if="!$v.name.required" style="color:red">*Please enter the name</p>
                      
                      <div class="form-group" :class="{invalid: $v.email.$error}">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                @blur="$v.email.$touch()"
                                v-model="email">
                    </div>
                    <p v-if="!$v.email.required" style="color:red">*Please enter the email</p>
                    <p v-if="!$v.email.email" style="color:red">*enter a valid mail</p>
                    <div class="form-group" :class="{invalid: $v.password.$error}">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                @blur="$v.password.$touch()"
                                v-model="password">
                                
                    </div>
                    <p v-if="!$v.password.minLen" style="color:red">*Please enter atleast {{$v.password.$params.minLen.min}} letters</p>
                    <div class="form-group" :class="{invalid: $v.age.$error}" >
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                @blur="$v.age.$touch()"
                                v-model="age">
                    </div>
                    <p v-if="!$v.age.minVal" style="color:red">*age should be atleast {{$v.age.$params.minVal.min}} years old</p>


                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group" :class="{invalid : $v.address.$error}">
                    <label for="message">Address</label><br>
                   
                    <textarea
                            id="address"
                            rows="5"
                            class="form-control"
                            @blur="$v.address.$touch()"
                            v-model="address"></textarea>
                             <p v-if="!$v.address.required" style="color:red">*Please enter the address</p>
                </div>
            
               
            </div>
            

            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"  :class="{invalid : $v.gender.$error}">
                    <label for="male">Gender
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                 @blur="$v.gender.$touch()"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                 @blur="$v.gender.$touch()"
                                v-model="gender"> Female
                    </label>
                      <p v-if="!$v.gender.required" style="color:red">*Please select your gender</p>
                </div>

            </div>
            
            <hr>
            
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            :disabled="$v.$invalid"
                            @click="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        
    </div>
</template>

<script>
  import {required,email,minLength,minValue} from 'vuelidate/lib/validators'
    export default {
        data(){
            return{
               
                   name:'',
                   email:'',
                   password:'',
                   age:'',
               
                  address:'',
               
               gender:'',
         
            }
        },


        validations:{

        name:{
            required
        },
        email:{
            required,
            email
        },
        password:{
            required,
            minLen:minLength(6)
        },
        age:{
            required,
            minVal:minValue(18)
        },
        address:{
            required,
        
        },
        gender:{
            required
        }

        },




        methods:{
       submitted(){
      
          this.$router.push({name:'login'});
}

        }
        
    }
</script>

<style>
.form-group.invalid label{
    color: red;
}
</style>
