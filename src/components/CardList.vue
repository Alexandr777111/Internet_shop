<template>
<section class="Home_page">
    <p class="card_header"> Хит продаж </p>
<ul class="catalog">
   <Card
    v-for="product in products"
    :key="product.id"
    :product_data = "product"
   />
</ul>
</section>
</template>


<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Card from './Card.vue'


const products = ref([])


onMounted(async () => {
    try {
        const { data } = await axios.get('https://5c4ca82f846fcc36.mokky.dev/product')
        products.value = data
    }
    catch (err) {
        console.log(err)
    }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
$main-color: #414141;

.Home_page {
    width: 1140px;
    margin: 0 auto;
}
.catalog {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    cursor: pointer;
    column-gap: 29px;
    margin-top: 56px;
}
.card_header {
    color: #414141;
    margin-top: 30px;
    width: 101px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
}




</style>