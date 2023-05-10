<script setup>
import TheWelcome from './components/TheWelcome.vue';
import Discount from './components/Discount.vue';
import Modal from './components/Modal.vue';
import CardList from './components/CardList.vue';

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
    <h1>테스트테스트</h1>
    <Discount v-if="showDiscount === true" />
    <button @click="priceSort">가격순 정렬</button>
    <button @click="priceBackSort">가격 역순 정렬</button>
    <button @click="sortBack">되돌리기</button>
    <Transition name="fade">
      <Modal :rooms="rooms" :modal="modal" :modal_content="modal_content" @closeModal="modal = false" />
    </Transition>
    <CardList @modal="modal = true; modal_content = $event" v-for="(card, i) in rooms" :key="data" :rooms="rooms[i]" :modal="modal" :modal_content="modal_content" />
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
      showDiscount : true,
      roomsOrigin : [...data],
      menus : ['Home', 'rooms', 'About'],
      modal: false,
      rooms : data,
      modal_content : 0,
    }
  },
  methods: {
    priceSort() {
      this.rooms.sort(function(a, b) {
        return a.price - b.price;
      });
    },
    priceBackSort() {
      this.rooms.sort(function(a, b) {
        return b.price - a.price;
      });
    },
    sortBack() {
      this.rooms = [...this.roomsOrigin];
    },
  },
  mounted() {
    setTimeout(()=> {
      this.showDiscount = false;
    }, 2000);
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    CardList : CardList,
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

  .fade-enter-from {opacity: 0;}
  .fade-enter-active {transition: all 0.4s;}
  .fade-enter-to {opacity: 1;}
  .fade-leave-from {opacity: 1;}
  .fade-leave-active {transition: all 0.4s;}
  .fade-leave-to {opacity: 0;}

</style>