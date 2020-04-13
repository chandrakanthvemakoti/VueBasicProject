<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Login</h1>
                    <hr>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input
                                type="text"
                                id="username"
                                class="form-control"
                               >
                    </div>
                      
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                >
                    </div>
                    </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click="login"
                            >Login
                    </button>
                </div>
            </div>
            
                    </form>
    </div>
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.push({name:'dashboard'});
        }
    }
}
</script>