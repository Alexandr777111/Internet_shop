<template>
<swiper-container
  loop = "true"
  navigation = "truе"
  pagination = "true"
  nextEl = "swiper-button-next"
  prevEl = "swiper-button-prev"
  speed = "500"
  space-between="20"
  class="mySwiper"
  
   >
  <swiper-slide class="slide_item">
    <h1 class="slide_header">loft <br>мебель</h1>
    <p class="slide_text">Современная и удобная мебель в Анапе</p>
    <button class="slide_button">СМОТРЕТЬ КАТАЛОГ</button>
    <img src="../pictures-slide/1785 1.png" alt="">
  </swiper-slide>

  <swiper-slide class="slide_item">
    <h1 class="slide_header">loft <br>мебель</h1>
    <p class="slide_text">Современная и удобная мебель в Анапе</p>
    <button class="slide_button">СМОТРЕТЬ КАТАЛОГ</button>
    <img src="../pictures-slide/1785 1.png" alt="">
  </swiper-slide>

  <swiper-slide class="slide_item">
    <h1 class="slide_header">loft <br>мебель</h1>
    <p class="slide_text">Современная и удобная мебель в Анапе</p>
    <button class="slide_button">СМОТРЕТЬ КАТАЛОГ</button>
    <img src="../pictures-slide/1785 1.png" alt="">
    
  </swiper-slide>

  
</swiper-container>


</template>
<script>

import { register } from 'swiper/element/bundle';
register();



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
.mySwiper {
  width: 1140px;
  height: 450px;
  margin-top: 20px;

}
.swiper-button-next, .swiper-button-prev {
  width: 40px;
  height: 30px;
  background-color: red;
}

.swiper-button-next::after {
  color: rgba(157, 157, 157, 0.28);
}
.slide_header {
  position: absolute;
  padding: 120px 100px;
  font-size: 50px;
  font-weight: 700;
  line-height: 105.3%;
  font-family: Playfair Display;
  letter-spacing: 1px;
  color: rgba(60, 60, 60, 1);
  text-transform: uppercase;
  z-index: 2;

}
.slide_text {
  position: absolute;
  padding: 230px 100px;
  color: #343434;
  font-family: Roboto Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140.8%;
  letter-spacing: 0.32px;
}
.slide_button {
  position: absolute;
  width: 163px;
  height: 45px;
  margin: 264px 100px;
  color:#414141;
  font-family: Roboto Condensed;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  border: none;
  cursor: pointer;
  line-height: 140.8%;
  letter-spacing: 0.48px;
  background-color: #FFF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.07);

}






</style>