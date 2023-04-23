<script setup>

</script>


<template>
<div id="wrapper">
  <a href="#main" id="skip-nav">본문 바로가기</a>
  <header>
    <h1>Vuelog</h1>
  </header>
  <main id="main">
    <router-view :HomeRoute="HomeRoute"></router-view>
    <router-view :DetailContent="DetailContent"></router-view>
  </main>

</div>
</template>

<script>
import blog from './assets/blog.js';

export default {
  name: 'App',
  data() {
    return {
      blogs : blog,
      blog_content : 0,
    }
  },
  components: {

  },
}
</script>

<style>
  header {width: 100%; background-color: #42b983; padding: 15px; min-width: 320px; color: #ffffff;}


</style>
