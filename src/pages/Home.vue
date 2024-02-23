<template>
  <div class="home">
    <AppHeader/>
    <Slider/>
    <CardList/>
    <Footer/>
  </div>

</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import CardList from '../components/CardList.vue'

export default {
  components: {
  AppHeader, Slider, Footer,
  CardList
  },
  props: {},
  data() { 
    return {}
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


