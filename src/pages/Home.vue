<template>
  <div class="home">
    <AppHeader/>
    <Slider/>
    <Main-Home
    v-for="product in products"
    :key="product.article"
    :product_data="product"
    />
    <Footer/>
  </div>

</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import MainHome from '../components/Main-Home.vue'

export default {
  components: {
  AppHeader, Slider, Footer,
  MainHome
  },
  props: {},
  data(){
    return {
      products:[
        { name:"card_1",
          article:"t1",
          price:1000 },

        { name: "card_2",
          article:"t2",
          price:2000 },

        { name:"card_3",
          article:"t3",
          price:500 },

        { name:"card_4",
          article:"t4",
          price:200 },

        { name:"card_5",
          article:"t5",
          price:100 },

        { name:"card_6",
          article:"t6",
          price:500 },
          
        { name:"card_7",
          article:"t7",
          price:1000 }
        
    ]
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&family=Roboto&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
</style>


