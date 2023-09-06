<template>
<section class="Home_page">
   <div class="container">
    <!-- <p class="card_header">Хит продаж</p> -->
    <ul class="product_card">
        <li class="card_item">
            <div class="card_wrap">
                <svg class="card_icon" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                <path d="M2.29442 8.54442L9.75 16L17.2056 8.54442C18.0344 7.71562 18.5 6.59152 18.5 5.41942C18.5 2.97864 16.5214 1 14.0806 1C12.9085 1 11.7844 1.46562 10.9556 2.29442L9.75 3.5L8.54442 2.29442C7.71562 1.46562 6.59152 1 5.41942 1C2.97864 1 1 2.97864 1 5.41942C1 6.59152 1.46561 7.71561 2.29442 8.54442Z" stroke="black" stroke-linejoin="round"/>
            </svg>
            <img src="../card-picture/image 2.png" alt="">
            <div class="card_content">
                <h2>{{product_data.name}}</h2>
                <p>Барные стулья</p>
                <h2 class="card_price">{{product_data.price}}</h2>
                <div class="active">
                    <p class="dimensions_header">Размеры</p>
                <div class="dimensions">
                    <p class="dimensions_item">Ширина</p>
                    <p class="dimensions_item">Глубина</p>
                    <p class="dimensions_item">Высота</p>
                </div>
                <button class="card_button">Добавить в корзину</button>
                </div>
            </div>
            </div>
        </li>
    </ul>
   </div>
</section>
</template>


<script>
 export default {
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
 }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
$main-color: #414141;

.container {
    width: 1140px;
    margin: 0 auto;
}

li img {
    width: 200px;
    height: 150px;
    margin: 70px 30px;
}
// .card_header {
//     color: #414141;
//     margin-top: 30px;
//     width: 101px;
//     height: 19px;
//     font-family: Roboto;
//     font-size: 16px;
// }

.product_card {
    position: relative;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    column-gap: 29px;
    margin-top: 56px;
}
.card_item {
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
        z-index: 3 !important;
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
    }

    &:hover {
            box-shadow: 0px 1px 9px 0px rgba(0, 0, 0, 0.11);
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
        background-color: #FFF;
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
    margin-left: 20px;
}
.card_icon {
    position: absolute;
    right: 15px;
    top: 21px;
}


</style>