<template>
  <div id="goods-sort">
      <div class="goods-sort-left">
          <div>
              <router-link to="/tuijiefenlei">推荐分类</router-link>
          </div>
          <div>
              <router-link to="/JDchaoshi">京东超市</router-link>
          </div>
      </div>
      <div class="goods-sort-right">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'goods-sort',
  data(){
    return{

    }
  },
  methods:{
    
  },
  mouted(){
    console.log(this)
  }
}
</script>

<style lang="less">
#goods-sort{
  width: 100%;
  height: 20rem;
  margin-top: .1rem;
  // height: 100%;
  display: flex;
  background: #ccc;
}
.goods-sort-left {
  width: 20%;
  height: 7rem;
  background: #ccc;
  div{
    text-align: center;
    padding: .1rem 0;
    a{
      color: black;
    }
    a:hover{
      color: khaki;
    }
  }
}
.goods-sort-right{
  width: 80%;
  height: 7rem;
}
</style>
