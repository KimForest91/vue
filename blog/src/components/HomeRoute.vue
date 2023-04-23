<template>
  <div class="container">
    <h5>React 개발자의 블로그입니다</h5>
    <p>- Vue로 만들었음 -</p>
  </div>
</template>

<script>
export default {
  name: 'HomeRoute',
}
</script>

<style>
  div.container {font-size: 22px; padding: 30px 15px; text-align: center;}
  div.container > h5 {margin-bottom: 10px;}
  div.container > h5 + p {font-size: 16px;}
</style>