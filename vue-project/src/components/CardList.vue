<template>
<div v-for="(data, i) in data" :key="data" class="goods">
  <img alt="room image" :src="rooms[i].image">
  <h4 @click="modal = true; modal_content = i">{{ rooms[i].title }}</h4>
  <p>{{ rooms[i].price }} 원</p>
  <button @click="count[i]++">허위매물신고</button><span>신고수 : {{ count[i] }}</span>
</div> 
</template>

<script>


export default {
  name : 'CardList',
  methods: {
    increase() {
      this.count += 1;
    },

  },
  props: {
    rooms : Array,
    modal: Boolean,
    modal_content : Number,
    count : Array,
  }
}
</script>

<style>
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
</style>