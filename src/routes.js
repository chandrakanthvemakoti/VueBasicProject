
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Welcome from './components/Welcome.vue';
import Dashboard from './components/Dashboard.vue';

export const routes =[
    {path:'/',component:Welcome},
    {path:'/register',component:Registration},
    {path:'/login' ,component:Login, name:'login'},
    { path: '/dashboard', component: Dashboard,name:'dashboard'}


]