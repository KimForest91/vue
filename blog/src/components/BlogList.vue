<template>
  <div class="contents">
    <h5>{{ blogs.title }}</h5>
    <p class="detail">
      <span class="date">{{ blogs.date }}</span>
      <span class="no">No. {{ blogs.number }}</span>
    </p>
    <p class="text">{{ blogs.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    blogs : Array,
    blog_content : Number,
  }
}
</script>

<style>
  div.contents {position: relative; margin: 15px; padding: 15px; min-height: 200px; box-sizing: border-box; border-radius: 5px; background-color: rgb(228, 228, 228); overflow: hidden;}
  div.contents > h5 {float: left; font-size: 18px; margin-bottom: 10px; width: 60%; max-height: 1.1em; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  div.contents p.detail {float: right; overflow: hidden;}
  div.contents p.detail > span {float: left; font-size: 10px; line-height: 28px;}
  div.contents .date {margin-right: 10px;}
  div.contents .no {}
  div.contents p.text {padding-top: 40px;}

</style>
