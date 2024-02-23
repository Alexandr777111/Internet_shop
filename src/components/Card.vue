<template>
        <li class="card_item">
            <div class="card_wrap">
                <svg class="card_icon" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                <path d="M2.29442 8.54442L9.75 16L17.2056 8.54442C18.0344 7.71562 18.5 6.59152 18.5 5.41942C18.5 2.97864 16.5214 1 14.0806 1C12.9085 1 11.7844 1.46562 10.9556 2.29442L9.75 3.5L8.54442 2.29442C7.71562 1.46562 6.59152 1 5.41942 1C2.97864 1 1 2.97864 1 5.41942C1 6.59152 1.46561 7.71561 2.29442 8.54442Z" stroke="black" stroke-linejoin="round"/>
            </svg>
            <img :src=" './src/card-picture/' + product_data.img" alt="">
            <div class="card_content">
                <h2>{{ product_data.Name }}</h2>
                <p>Барные стулья</p>
                <h2 class="card_price">{{ product_data.Price + " ₽" }}</h2>
                <div class="active">
                    <p class="dimensions_header">Размеры</p>
                <div class="dimensions">
                    <p class="dimensions_item">Ширина</p>
                    <p class="dimensions_item">Глубина</p>
                    <p class="dimensions_item">Высота</p>
                </div>
                <button @click='addToCart(product_data)' class="card_button">Добавить в корзину</button>
                </div>
            </div>
            </div>
        </li>
</template>


<script setup>
import { useBagStore } from '@/store/store.js'
import { ref } from 'vue'


defineProps({ product_data: Object })
const bagStore = useBagStore()


const addToCart = (item) => {
    console.log(item)
    bagStore.add(item)
}




//  export default {
//     props: {
//         product_data: {
//             type: Object,
//             default() {
//                 return {}
//             }
//         }
//     }
//  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
$main-color: #414141;



li img {
    width: 200px;
    height: 150px;
    margin: 70px 30px;
}

li {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 263px;
    height: 340px;
    background: #FFF;
    overflow: hidden;
    &:hover {
        overflow: visible;
        height: 100%;
        z-index: 1;
    }

    h2 {
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        color: $main-color;
    }
    p {
        padding-top: 6px;
        font-family: Roboto;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        color: $main-color;
 
    }
.card_price {
    padding-top: 9px;
    color: #414141;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    }
}
.card_wrap {
    position: absolute;
    background: #FFF;
    &:hover {
            box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.11);
        }
}


.card_button {
    margin-top: 36px;
    width: 223px;
    height: 40px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #245462;
    color: #FFF;
    border: none;
    &:hover {
        background-color:#FFF;
        color: #245462;
        transition: 0.5s;
        box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.11);
    }
}

.dimensions {
    display: flex;
    justify-content: space-around;
    margin-top: 8px;

    &_header {
    width: 52px;
    height: 14px;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

    &_item {
    color: #C4C4C4;
    font-size: 9px;
    font-weight: 400;
        }
    }
}
.card_content {
    width: 223px;
    margin: 0 auto;
}
.card_icon {
    position: absolute;
    right: 15px;
    top: 21px;
}


</style>