<template>
<div class="Home main-content">
  <header>
    <span class="head-pic"><img src="/static/img/headpic4.jpg" alt=""></span>
    <div class="head-title"><span>{{title}}</span></div>
  </header>
  <main>
    <div class="containt-search">
      <span><i class="icon iconfont">&#xe6ac</i></span><input type="text" placeholder="搜索你感兴趣的新鲜事">
    </div>
    <homePage></homePage>
  </main>
</div>
</template>

<script>
  import homePage from '@/components/homePage'
  export default {
    name: 'Home',
    data () {
      return {
        title: '发现'
      }
    },
    components: {
      homePage
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
