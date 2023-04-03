<script setup>
import TheWelcome from './components/TheWelcome.vue'
import Discount from './components/Discount.vue'
</script>

<template>
<div id="wrapper">
  <a href="#main" id="skip-nav">본문 바로가기</a>
  <header>
    <ul>
      <li v-for="menu in menus" :key="menu"><a href="#">{{ menu }}</a></li>
    </ul>
  </header>
  <main id="main">
    <Discount></Discount>
    <div class="black_bg" v-if="modal === true">
      <div class="white_bg">
        <img alt="room image" :src="rooms[modal_content].image">
        <h5>{{ rooms[modal_content].title }}</h5>
        <span>{{ rooms[modal_content].content }}</span>
        <span>월 {{ rooms[modal_content].price }} 원</span>
        <button @click="modal = false">닫기</button>
      </div>
    </div>
    <div v-for="(data, i) in data" :key="data" class="goods">
      <img alt="room image" :src="rooms[i].image">
      <h4 @click="modal = true; modal_content = i">{{ rooms[i].title }}</h4>
      <p>{{ rooms[i].price }} 원</p>
      <button @click="count[i]++">허위매물신고</button><span>신고수 : {{ count[i] }}</span>
    </div> 
  </main>

</div>
</template>

<script>
import data from './assets/js/data.js';


export default {
  name: 'App',
  data() {
    return {
      //데이터보관함
      menus : ['Home', 'rooms', 'About'],
      count: [0, 0, 0],
      modal: false,
      rooms : data,
      modal_content : 0,
    }
  },
  methods: {
    increase() {
      this.count += 1;
    },

  },
  components: {
    Discount : Discount,
  }
}

</script>

<style scoped>
  header {width: 100%; background: pink; padding: 15px; border-radius: 5px; min-width: 320px;}

  ul {width: 260px; margin: 0 auto; overflow: hidden; } 
  ul > li {float: left;}
  ul > li > a {color: aliceblue; padding: 10px 20px; display: block;}

  div {text-align: center; box-sizing: border-box;} 
  div > img {width: 100%; margin-top: 40px;}
  div > h4 {font-weight: 800; font-size: 18px; margin: 15px 0 5px 0;}
  div > h5 {font-weight: 800; font-size: 16px; margin-bottom: 20px;}
  div > p {font-size: 14px; color: blue; margin-bottom: 20px;}
  div > span {margin-bottom: 20px;}
  div.goods button {margin-right: 20px;}

  
  .black_bg {position: fixed; left: 0; top: 0; padding: 20px; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1000;}
  .white_bg {width: 100%; background: white; border-radius: 8px; padding: 20px;}
  .white_bg > span {display: block;}
</style>
 