<script setup>
import BlogList from './components/BlogList.vue';

</script>


<template>
<div id="wrapper">
  <a href="#main" id="skip-nav">본문 바로가기</a>
  <header>
    <h1>Vuelog</h1>
  </header>
  <main id="main">
    <div class="container">
      <h5>React 개발자의 블로그입니다</h5>
      <p>- Vue로 만들었음 -</p>
    </div>
    <BlogList v-for="(blog, i) in blogs" v-bind:key="blog" :blogs="blogs[i]" :blog_content="blog_content"/>
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
    BlogList : BlogList,
  },
}
</script>

<style>
  header {width: 100%; background-color: #42b983; padding: 15px; min-width: 320px; color: #ffffff;}

  div.container {font-size: 22px; padding: 30px 15px; text-align: center;}
  div.container > h5 {margin-bottom: 10px;}
  div.container > h5 + p {font-size: 16px;}
</style>
