
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Welcome from './components/Welcome.vue';

export const routes =[
    {path:'/',component:Welcome},
    {path:'/register',component:Registration},
   
    {path:'/login' ,component:Login,name:'login'}

]