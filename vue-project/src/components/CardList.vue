<template>
  <div class="goods">
    <img alt="room image" :src="rooms.image">
    <h4 @click="openModal">{{ rooms.title }}</h4>
    <p>{{ rooms.price }} 원</p>
    <button @click="count++">허위매물신고</button><span>신고수 : {{ count }}</span>
  </div> 
</template>
<script>


export default {
  name : 'CardList',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increase() {
      this.count += 1;
    },
    openModal() {
      this.$emit('modal', this.rooms.id)
    }
  },
  props: {
    rooms : Object,
    modal: Boolean,
    modal_content : Number,
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