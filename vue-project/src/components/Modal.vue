<template>
<div class="black_bg" v-if="modal === true">
  <div class="white_bg">
    <img alt="room image" :src="rooms[modal_content].image">
    <h5>{{ rooms[modal_content].title }}</h5>
    <span>{{ rooms[modal_content].content }}</span>
    <!-- <input @input="month = $event.target.value"> -->
    <input v-model="month" >
    <span> {{ month }}개월 : {{ rooms[modal_content].price * month / 10000 }} 만원</span>
    <button @click="$emit('closeModal')">닫기</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      month : 1,
    }
  },
  watch: {
    month(n) {
      //사용자가 month에 입력한 데이터가 13보다 크면 경고문 띄우기
      //파라미터 (n, m)일 때, n은 바뀐 후, m은 바뀌기 전 데이터
      if (n > 12) {
        alert('12이하로 입력하세요.');
      }
      if (isNan(n) === true) {
        alert('숫자만 입력하세요.');
        this.month = 1;
      }
    },
  },
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