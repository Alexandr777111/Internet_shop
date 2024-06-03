<template>
    <div>
        <AppHeader/>
        <!-- {{ bagStore.bag }} -->
        <section class="basket">
                <p class="nav"> Главная / Корзина </p>
            <div v-if="bagStore.bag.length === 0" class='basket-clear'> Корзина пуста </div>
            <div v-else class="up_basket">
                <p> Ваша корзина </p>
                <p> {{ displayItemCount(TotalCount) }} </p>
            </div>
              <div v-for="(item, index) in bagStore.bag" :key="index" class="card_products"> 
                <img :src=" './src/card-picture/' + item.img" alt="">
                <div class="card_wrapper">
                    <h2>{{ item.Name }}</h2>
                <div class="product_info">
                    <p>Цвет:<span> Темно-синий </span></p>
                    <p>Количество:<span> {{ item.quantity }} </span></p>
                    <p>Размер(Ш×Д×В):<span> 218 СМ × 95 СМ × 90 СМ</span></p>
                </div>
                </div>
                <div class="price">{{ item.Price + ' ₽' }}</div>
                    <svg @click='bagStore.delete(index)' xmlns="http://www.w3.org/2000/svg" width="30" height="120" viewBox="0 0 30 120" fill="none">
                        <rect width="30" height="120" fill="#F9F9F9"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8477 60.7071C14.2382 60.3166 14.2382 59.6834 13.8477 59.2929L11.2226 56.6678C11.0997 56.5448 11.0997 56.3455 11.2226 56.2226C11.3455 56.0997 11.5448 56.0997 11.6678 56.2226L14.2929 58.8477C14.6834 59.2382 15.3166 59.2382 15.7071 58.8477L18.3322 56.2226C18.4552 56.0997 18.6545 56.0997 18.7774 56.2226C18.9003 56.3455 18.9003 56.5448 18.7774 56.6678L16.1523 59.2929C15.7618 59.6834 15.7618 60.3166 16.1523 60.7071L18.7774 63.3322C18.9003 63.4552 18.9003 63.6545 18.7774 63.7774C18.6545 63.9003 18.4552 63.9003 18.3322 63.7774L15.7071 61.1523C15.3166 60.7618 14.6834 60.7618 14.2929 61.1523L11.6678 63.7774C11.5448 63.9003 11.3455 63.9003 11.2226 63.7774C11.0997 63.6545 11.0997 63.4552 11.2226 63.3322L13.8477 60.7071Z" fill="#C9C9C9" stroke="#C9C9C9"/>
                    </svg>              
            </div> 
        </section>
        <div class="basket_order">
                <div  class='total-price'> Итоговая стоимость: <span class='total-price-number'>{{ TotalPrice + ' ₽' }}</span></div>
                <button class='bag_button'> Оформить заказ </button>
            </div>
        <Footer/>
    </div>
    
    
</template>

<script setup>

import AppHeader from '../components/AppHeader.vue'
import Footer from '../components/Footer.vue'
import { useBagStore } from '@/store/store.js'



const bagStore = useBagStore()

const TotalPrice = bagStore.totalPrice
const TotalCount = bagStore.totalCount

function displayItemCount(count) {
      if (count === 1) {
        return `${count} товар`;
      } else if (count >= 2 && count <= 4) {
        return `${count} товара`;
      } else {
        return `${count} товаров`;
      }
}

</script>

<style lang='scss' scoped>

.basket {
    // max-height: 100%;
    // overflow-y: auto;
    width: 1140px;
    margin: 0 auto;
    margin-top: 50px;
    // height: 60em;
}
.nav {
    color: #969696;
    font-family: Roboto;
    font-size: 12px;
}
.up_basket {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
}
.card_products {
    position: relative;
    width: 1140px;
    height: 120px;
    display: flex;
    margin-top: 60px;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);
    img {
        margin-left: 20px;
    }
}
.product_info {
    display: flex;
    margin-top: 20px;
    
}
.product_info p:not(:last-child) {
    margin-right: 15px;
}
.product_info p {
    display: flex;
    justify-content: space-around;
    color: var(--text-color, #414141);
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.card_wrapper {
    margin-left: 40px;
    margin-top: 20px;
}
h2 {
    color: var(--text-color, #414141);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.product_info span {
    color: #9E9E9E;
    margin-left: 5px;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.price {
    color: var(--text-color, #414141);
    margin-left: 250px;
    margin-top: 25px;
    height: 20px;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;    
}
.button {
    width: 57px;
    height: 120px;
}
svg {
    position: absolute;
    right: 0;
    cursor: pointer;
}
.price {
    color: var(--text-color, #414141);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;    
}    
.bag_button {
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
.basket_order {
    width: 1140px;
    margin: 0 auto;
    display: flex;
    margin-top: 13rem;
    justify-content: flex-end
}
.total-price {
    margin-top: 51px;
    margin-right: 25px;
    font-size: 14px;
    font-family: Roboto;
    font-weight: 400;

}
.total-price-number {
    font-size: 16px;
    margin-left: 10px;
    color: #414141;
    font-family: Roboto;
    font-weight: 400;

}
.basket-clear {
    text-align: center;
    font-size: 25px;
    color: #414141;
    font-family: Roboto;
    margin-top: 150px;
    opacity: 0.6;
}
@media (max-width: 1160px) {
    .basket {
        max-width: 960px;
    }
    .basket_order {
        max-width: 960px;
    }
}

</style>
