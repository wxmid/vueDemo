<template>
  <div id="app">
    <transition name="fade">
      <img v-if="show" class="startPic" src="/static/img/start.jpg">
    </transition>
    <!--<div v-if="!show" class="main-content">-->
      <router-view></router-view>
    <!--</div>-->
    <footer v-if="!show">
      <router-link v-bind:class="{tabbarActive:isActived[0]}" to="/" @click.native="triggerTabbar(0)">
        <i class="icon iconfont">&#xe7eb</i>
        <span>发现</span>
      </router-link>
      <a @click="releaseModel">
        <i style="font-size: 42px !important;width: 46px;line-height: 46px;background: #ff8f4c;color: #fff;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;" class="icon iconfont">&#xe7dd;</i>
      </a>
      <router-link to="/myInfo" v-bind:class="{tabbarActive:isActived[1]}" @click.native="triggerTabbar(1)">
        <i class="icon iconfont">&#xe78b;</i>
        <span>我的</span>
      </router-link>
    </footer>
    <releaseModel
      :isReleasemodel="isRelease"
      @closeSignal="closeReleaseModel"
    >
    </releaseModel>
  </div>
</template>

<script>
  import releaseModel from '@/components/releaseModel'
  export default {
    name: 'app',
    data () {
      return {
        show: true,
        isActived: [true, false],
        isRelease: false
      }
    },
    components: {
      releaseModel
    },
    created: function () {
      var self = this
      setTimeout(function () {
        self.show = false
      }, 800)
    },
    methods: {
      triggerTabbar (index) {
        this.isActived = [false, false]
        this.isActived[index] = true
        /*
        if (index === 1) {
          this.isRelease = true
        } else {
          this.isRelease = false
        }
        */
      },
      closeReleaseModel () {
        this.isRelease = false
      },
      releaseModel () {
        this.isRelease = true
      }
    }
  }
</script>

<style>
  html,body,#app,.main-content,.release-model {
    height:100%;
    /*max-width:480px;*/
    margin:0 auto;
  }
  body {
    padding:0;
    margin:0;
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }
  .clearfix :before , .clearfix :after {
    content : "";
    display : table;
  }
  .clearfix :after {
    clear : both;
  }
  .clearfix {
    *zoom : 1;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width:100%;
    /*max-width: 480px;*/
    /*margin: 0 auto;*/
    position: relative;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #919191;
    text-decoration:none!important;
  }
  .startPic {
    position: relative;
    top:0;
    width: 100%;
    min-height: 100vh;
    z-index: 1001;
  }
  /*fade显隐*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .6s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  /*flex布局*/
  header,footer,.release {
    position: fixed;
    width: 100%;
    /*max-width:480px;*/
    margin:0 auto;
  }
  @media (min-width: 768px) {
    html,body,#app,.main-content,.release-model,header,footer,.release {
      max-width:480px;
    }
  }

  header {
    height: 55px;
    border-bottom:1px solid #ccc;
    box-shadow: 0px 1px 1px #b7b7b7;
    top:0;
    background: #fff;
    z-index:2;
  }
  main {
    background: #eef1f6;
    margin-bottom: 43px;
  }
  .main-content {
    padding-top: 55px;
    background: #eef1f6;
    box-sizing: border-box;
  }
  footer {
    display: flex;
    margin-top: -54px;
    height: 54px;
    border-top: 1px solid #ccc;
    flex-direction:row;
    align-content:space-between;
    flex-wrap: wrap;
    justify-content:space-around;
    background: #fff;
    bottom:0;
  }
  footer a {
    display: inline-block;
    height: 46px;
    width: 33.333%;
    padding:4px 0;
  }
  footer a i {
    font-size: 26px !important;
    display: inline-block;
    line-height: 26px;
  }
  footer a span {
    display: block;
  }
  .head-pic {
    float: left;
    margin-left: 15px;
    margin-top: 5px;
  }
  .head-pic img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }
  .head-title {
    height:100%;
  }
  .head-title span {
    font-size: 20px;
    line-height:55px;
    margin-left:-59px;
  }
  .containt-search {
    background: #dcdcdc;
    height: 48px;
    line-height: 48px;
    padding: 0 10px 2px 10px;
    box-shadow: 0px 1px 3px #808080;
  }
  .containt-search span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background: #fff;
    width: 12%;
    vertical-align:middle;
    margin-right: -1px;
    border-radius: 6px 0 0 6px;
  }
  .containt-search span i {
    font-size:22px;
  }
  .containt-search input {
    height: 30px;
    border:none;
    width: 88%;
    outline:none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    vertical-align:middle;
    border-radius: 0 6px 6px 0;
  }
  .tabbarActive {
    color: #42b983;
    /*color: #00b0f0;*/
  }
</style>
