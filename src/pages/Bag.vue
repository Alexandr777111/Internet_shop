<template>
    <div>
        <AppHeader/>
        <section class="basket">
            <nav>
                <p class="nav">Главная / Корзина</p>
            </nav>
            <div class="up_basket">
                <p>Ваша корзина</p>
                <p>4 предмета</p>
            </div>
            <div class="card_products">
                <div class="card_item">
                    <img src="../card-picture/image 3.png" alt="">
                </div>
            </div>
        </section>
    </div>
    
    
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
    export default {
        components: {
            AppHeader
        }
    }
</script>

<style lang=scss scoped>
.basket {
    width: 1140px;
    margin: 0 auto;
    margin-top: 30px;
}
.nav {
    color: #969696;
    font-family: Roboto;
    font-size: 12px;
}
.up_basket {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}
.card_item {
    width: 1140px;
    height: 120px;
    margin-top: 20px;
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);

    
}
</style>
