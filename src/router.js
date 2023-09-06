import { createRouter,createWebHashHistory } from "vue-router";
import Home from './pages/Home.vue'
import  Bag  from './pages/Bag.vue'
import  Product  from './pages/Product.vue'
import Likes from './pages/Likes.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home, alias: '/' },
        { path: '/bag', component: Bag },
        { path: '/product', component: Product },
        { path: '/likes', component: Likes }
        
    ]
})
