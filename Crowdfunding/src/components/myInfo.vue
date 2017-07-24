<template>
  <div class="myInfo main-content">
    <header class="myInfo-header">
      <span class="head-tag"><router-link to="/addNewFriend">添加好友</router-link></span>
      <span class="head-info">我的</span>
      <span class="head-sett"><router-link to="/setting"> <i class="icon iconfont">&#xe6d6</i></router-link></span>
    </header>
    <main>
      <div class="myInfo-top">
        <div class="myInfo-basicInfo">
          <span class="user-headImg"><img src="/static/img/headpic4.jpg" alt=""></span>
          <span class="user-detail">
            <b>曾经︶⒈直盗版</b>
            <p>
              <spab>简介：</spab>
              <spab>拂去的春光，不死的梦...</spab>
            </p>
          </span>
        </div>
        <div class="myInfo-date-record">
          <a class="user-data">
            <span>101</span>
            <span>发布</span>
          </a>
          <a class="user-data">
            <span>206</span>
            <span>关注</span>
          </a>
          <a class="user-data">
            <span>133</span>
            <span>粉丝</span>
          </a>
        </div>
      </div>
      <div class="comment">
        <span class="comment-icon at-me">
          <i class="icon iconfont">&#xe657</i>
        </span>
        <span class="comment-text">@我的</span>
        <span class="comment-rrow">
          <i class="icon iconfont">&#xe6a7</i>
        </span>
      </div>
      <div class="comment">
        <span class="comment-icon commentary">
          <i class="icon iconfont">&#xe60c</i>
        </span>
        <span class="comment-text">评论</span>
        <span class="comment-rrow">
          <i class="icon iconfont">&#xe6a7</i>
        </span>
      </div>
      <div class="comment">
        <span class="comment-icon praise">
          <i class="icon iconfont">&#xe717</i>
        </span>
        <span class="comment-text">赞</span>
        <span class="comment-rrow">
          <i class="icon iconfont">&#xe6a7</i>
        </span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'myInfo'
}
</script>

<style>
 .myInfo-top {
   background: #fff;
   margin: 12px 0 12px 0;
 }
  .myInfo-header {
    display: flex;
    /*flex-direction:row;*/
    /*justify-content:space-between;*/
  }
.head-tag,.head-info,.head-sett {
  width: 33.333%;
  height: 100%;
  line-height: 55px;
}
.head-tag a,.head-sett a {
  padding: 10px;
  width: 100%;
  height: 100%;
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 35px;
  font-size: 16px;
  color: #000000;
}
.head-tag a:active,.head-sett a:active {
  color: #ffca29;
}
.head-info {
  font-size: 20px;
  color: #000000;
}
  .head-sett a i {
    font-size: 32px;
  }
  .myInfo-basicInfo {
    padding: 14px;
    height: 66px;
    border-bottom: 1px solid #dcdcdc;
    width: 100%;
  }
  .user-headImg {
    height: 100%;
    display: inline-block;
    float: left;

  }
  .user-headImg img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
  .user-detail {
    display: inline-block;
    float: left;
    text-align: left;
    height: 100%;
    margin-left: 12px;
  }
  .user-detail b {
    height: 50%;
    display: block;
    line-height: 33px;
    font-size: 15px;
  }
  .user-detail p {
    height: 50%;
    display: block;
    line-height: 33px;
  }
  .myInfo-date-record {
    display: flex;
  }
  .user-data {
    width: 33.333%;
    height: 36px;
    padding:10px 0;
  }
 .user-data:active {
   background: #eef1f6;
 }
 .user-data span {
   display: block;
 }
  .comment {
    background: #ffffff;
    height: 54px;
    padding: 10px;
    border-bottom:1px solid #dcdcdc;
  }
  .comment-icon{
    width: 54px;
    height: 54px;
    display: inline-block;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    float: left;
    margin-right: 10px;
  }
  .at-me {
    background: #73ecf3;
  }
  .commentary {
    background: #40f379;
  }
  .praise {
    background: #ffb92e;
  }
  .comment-icon i {
    font-size: 34px;
    line-height: 54px;
    color: #ffffff;
  }
  .comment-text {
    height: 54px;
    display: inline-block;
    float: left;
    line-height: 54px;
    font-size: 16px;
  }
  .comment-rrow {
    height: 54px;
    line-height: 54px;
    float: right;
  }
  .comment-rrow i {
    font-size: 24px;
  }
</style>
