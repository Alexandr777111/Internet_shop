import { createRouter, createWebHashHistory } from "vue-router";
import Home from './pages/Home.vue'
import  Bag  from './pages/Bag.vue'
import  Product  from './pages/Product.vue'
import Favorites from './pages/Favorites.vue'
import Auth from './pages/Auth.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home, alias: '/' },
        { path: '/bag', component: Bag },
        { path: '/product', component: Product },
        { path: '/favorites', component: Favorites },
        { path: '/Auth', component: Auth }
        
    ]
})
