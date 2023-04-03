<script setup>
import TheWelcome from './components/TheWelcome.vue'
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
<!--     <div v-for="(product, i) in products" :key="product">
      <h4>{{products[i]}}</h4>
      <p>{{ price[i] }} 만원</p>
    </div> -->
    <div>
      <h4>{{ products[0] }}</h4>
      <p>{{ price[0] }} 만원</p>
      <button @click="count[0]++">허위매물신고</button><span>신고수 : {{ count[0] }}</span>
    </div>
    <div>
      <h4>{{ products[1] }}</h4>
      <p>{{ price[1] }} 만원</p>
      <button @click="count[1]++">허위매물신고</button><span>신고수 : {{ count[1] }}</span>
    </div>
    <div>
      <h4>{{ products[2] }}</h4>
      <p>{{ price[2] }} 만원</p>
      <button @click="count[2]++">허위매물신고</button><span>신고수 : {{ count[2] }}</span>
    </div>
  </main>

</div>




</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      //데이터보관함
      menus : ['Home', 'rooms', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price: [50, 20, 100],
      count: [0, 0, 0],
    }
  },
  methods: {
    increase() {
      this.count += 1;
    }
  },
  components: {

  }
}

</script>

<style scoped>
  header {width: 100%; background: pink; padding: 15px; border-radius: 5px; min-width: 320px;}

  ul {width: 260px; margin: 0 auto; overflow: hidden; } 
  ul > li {float: left;}
  ul > li > a {color: aliceblue; padding: 10px 20px; display: block;}

  div > h4 {font-weight: 800; font-size: 24px;}
  div > p {font-size: 24px; color: blue;}

</style>
