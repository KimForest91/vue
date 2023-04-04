<template>
<div class="black_bg" v-if="modal === true">
  <div class="white_bg">
    <img alt="room image" :src="rooms[modal_content].image">
    <h5>{{ rooms[modal_content].title }}</h5>
    <span>{{ rooms[modal_content].content }}</span>
    <span>월 {{ rooms[modal_content].price }} 원</span>
    <button @click="modal = false">닫기</button>
  </div>
</div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    rooms : Array,
    modal: Boolean,
    modal_content : Number,
  }
}

</script>

<style>

  div > h5 {font-weight: 800; font-size: 16px; margin-bottom: 20px;}
  div > p {font-size: 14px; color: blue; margin-bottom: 20px;}
  div > span {margin-bottom: 20px;}
  div.goods button {margin-right: 20px;}

  .black_bg {position: fixed; left: 0; top: 0; padding: 20px; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1000;}
  .white_bg {width: 100%; background: white; border-radius: 8px; padding: 20px;}
  .white_bg > span {display: block;}
</style>


