<template>
  <div class="releaseText">
    <header>
      <div class="text-head">
        <button @click="backPage">取消</button>
      </div>
      <div class="text-head">
        <b>分享心情</b>
      </div>
      <div class="text-head">
        <button @click="publish" v-bind:disabled="isdisabled">发布</button>
      </div>
    </header>
    <div class="text-content">
      <pre><span>{{textVallue}}</span><br></pre>
      <textarea name="" id="release_text" placeholder="分享此刻..." v-model="textVallue" @input="canPublish"></textarea>
      <div class="hidden-text"></div>
    </div>
    <footer class="text-footer">
      <ul>
        <li>
          <a>
            <i class="icon iconfont">&#xe603</i>
          </a>
        </li>

        <li>
          <a>
            <i class="icon iconfont">&#xe6b3</i>
          </a>
        </li>

        <li>
          <a >
            <i class="icon iconfont">&#xe6a9</i>
          </a>
        </li>

        <li>
          <a >
            <i class="icon iconfont">&#xe629</i>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'releaseText',
  data () {
    return {
      artical: '',
      isdisabled: true,
      textVallue: ''
    }
  },
  methods: {
    backPage () {
      window.history.back()
    },
    publish () {
      window.history.back()
    },
    canPublish () {
      var isempty = this.textVallue.replace(/\s/g, '').length
      if (isempty) {
        this.isdisabled = false
      } else {
        this.isdisabled = true
      }
    }
  }
}
</script>

<style>
  .releaseText {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
  }
  .releaseText header {
    display: flex!important;
  }
.text-head {
  width: 33.333%;
  padding:4px 24px;
}
.text-head button {
  font-size: 16px;
  background: #ffffff;
  border:none;
  outline: none;
}
  .text-head button:active {
    color: #ffca29;
  }
  .text-head button,.text-head b {
  width: 100%;
  height: 100%;
}
  .text-head b {
    display: inline-block;
    line-height:100%;
    font-size: 18px;
    line-height: 55px;
  }
.text-content {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /*height: 100%;*/
  margin: 0 10px 0 10px;

  /*margin-top: 65px;*/
  position: relative;
}
.text-content pre {
  display:block;
  visibility:hidden;
}
.text-content span {
  font-size: 16px;
}
  #release_text {
    width: 100%;
    height: 100%;
    font-size: 16px;
    resize: none;
    border:none;
    outline:none;

    min-height: 100px;
    position:absolute;
    top:65px;
    left:0;
  }
  .hidden-text {
    font-size: 16px;
    width: 100%;
    height: 100%;

  }
  .text-footer ul {
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content:space-around;
  }
  .text-footer ul li {
    margin:0;
    width: 25%;
  }
  .text-footer ul li a {
    width: 100%;
    line-height: 54px;
  }
  .text-footer ul li a i {
    font-size: 16px;
  }
  .text-footer ul li a:active {
    color: #ffca29;
  }
</style>
