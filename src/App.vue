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
                                id="Name"
                                class="form-control"
                                >
                    </div>

                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
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
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                >
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
                            ></textarea>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">Gender
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                > Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                              > Female
                    </label>
                </div>
            </div>
           
           
            
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            >Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
    </div>
</template>

<script>

    export default {
    
        
       
    }
</script>

<style>

</style>
