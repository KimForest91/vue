<template>
  <div>
    <h4>디테일 제목</h4> 
    <h5>{{ blogs[1].title }}</h5> 
    <p>디테일 설명</p>
  </div>
</template>

<script>
export default {
  name: 'DetailContent',
  props: {
    blogs : Array,
    blog_content : Number,
  }
}

</script>

<style>

</style>