<template>
  <div id="mine">
    <!-- 头部 -->
      <div class="header">
          <img :src="imgsrc" alt="">
      </div>
      <!-- 公共部 -->
      <div class="mine-content">
          <div class="mine-content-top">
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
          </div>
          <div class="mine-content-top">
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
          </div>
          <!-- <div class="mine-content-footer">

          </div> -->
      </div>
      <!-- 公共部 -->
      <div class="mine-content">
          <div class="mine-content-top">
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
          </div>
          <div class="mine-content-top">
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
              <dl>
                  <dt><img :src="imgsrc" alt=""></dt>
                  <dd>待付款</dd>
              </dl>
          </div>
          <!-- <div class="mine-content-footer">

          </div> -->
      </div>

      <div class="mine-bt">
        为您推荐
      </div>

          <div class="jd-footer">
            <dl>
                <dt><img :src="imgsss" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgaaa" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgsss" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgaaa" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgsss" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
            <dl>
                <dt><img :src="imgaaa" alt=""></dt>
                <dd>潜行者游戏背光发光牧马人机械键盘鼠标有线网吧电...</dd>
                <dd><span>￥28.50</span><span>看相似</span></dd>
            </dl>
        </div>
      














  </div>
</template>

<script>
export default {
  name: 'mine',
  data(){
    return{
      imgsrc:require('../../../public/img-header/2.jpg'),
      imgsss:require('../../../public/img-main/56459700N2dc1bba1.jpg'),
      imgaaa:require('../../../public/img-main/59e42741N6ff7f008.jpg')
    }
  }
}
</script>

<style lang="less">
#mine {
  width:100%;
  height:20rem;
  background:#ccc;
}
.header{
  width: 100%;
  height: 1.34rem;
  background-color: rgba(240, 92, 58, 1);
  img{
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    margin-top: .32rem;
    margin-left: .17rem;
    
  }
}
// 公共部分
.mine-content{
  width: 100%;
  height: 1.7rem;
  margin-bottom: .1rem;
}
.mine-content-top{
  width: 100%;
  height: .85rem;
  border-bottom: solid 1px #ccc;
  display: flex;
  justify-content: space-around;
  background: white;
  dl{
    width: 20%;
    height: .85rem;
    text-align: center;
  }
  dt img{
    width:  70%;
    height: .45rem;
    margin-top: .1rem;
  }
}
.mine-bt{
  width: 100%;
  height: .34rem;
  line-height: .34rem;
  text-align: center;
}
//底部
.jd-footer{
    width: 100%;
    height: 7.83rem;
    display: flex;
    flex-wrap:wrap; 
    margin-bottom: .6rem;
    dl{
        width: 50%;
        height: 2.61rem;
        border: solid 1px #ccc;
        background: white;
    }
    dt img{
        width: 1.68rem;
        height: 1.68rem;
    }
    dd:nth-child(2){
        color: black;
    }
    dd:nth-child(3){
        margin-top: .15rem;
    }
    span:first-child{
        color: #F13737;
        padding-left: .1rem;
    }
    span:last-child{
        float: right;
        padding-right: .1rem;
    }   
}
</style>
