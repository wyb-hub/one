<template>
  <div id="headers">
    <img :src="img" alt="">
    <div class="serch">
        <Input v-model="value4" icon="md-volume-up" placeholder="Enter something..." style="width: 200px" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data(){
    return{
      value4: '',
      img:require('../../../public/img-header/soan1soan.png')
    }
  }
}
</script>


<style lang="less">
#headers {
  width:100%;
  height: 0.44rem;;
  background:white;
  position: fixed;
  top: 0;
  z-index: 1;
  img{
    width: .25rem;
    height: .25rem;
    margin:.1rem .1rem 0 .1rem; 
    float: left;
  }
  .serch{
    float: left;
    line-height: .44rem;
    margin-left: .5rem;
  }
}
</style>
